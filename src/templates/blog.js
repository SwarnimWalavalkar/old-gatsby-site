import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { RichText } from "prismic-reactjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./blog.module.scss"

export const query = graphql`
  query($uid: String!) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        featured_image {
          fluid(maxWidth: 1920, maxHeight: 1080) {
            ...GatsbyPrismicImageFluid
            src
          }
          fixed(width: 1280, height: 720) {
            ...GatsbyPrismicImageFixed
          }
        }
        author {
          text
        }
        excerpt {
          text
        }
        keywords {
          text
        }
        published_date(formatString: "MMMM Do, YYYY")
        body {
          ... on PrismicBlogPostBodyRichText {
            slice_type
            id
            primary {
              rich_text {
                html
                raw
              }
            }
          }
          ... on PrismicBlogPostBodyImage {
            slice_type
            id
            primary {
              image {
                fluid(maxWidth: 1000, maxHeight: 800) {
                  ...GatsbyPrismicImageFluid
                }
                fixed(width: 1280, height: 720) {
                  ...GatsbyPrismicImageFixed
                }
              }
            }
          }
          ... on PrismicBlogPostBodyTitleSectionTitle {
            slice_type
            id
            primary {
              section_title {
                html
              }
            }
          }
        }
      }
    }
  }
`

const blog = ({ data }) => {
  const { prismicBlogPost: Post } = data

  const blogBody = Post.data.body.map((slice, index) => {
    switch (slice.slice_type) {
      case "rich_text":
        return <div>{RichText.render(slice.primary.rich_text.raw)}</div>
      case "title_section_title":
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: slice.primary.section_title.html,
            }}
          />
        )
      case "image":
        return (
          <div>
            <Img fluid={slice.primary.image.fluid} />
          </div>
        )
      default:
        return <div />
    }
  })

  let featured_image
  if (Post.data.featured_image.fluid) {
    featured_image = <Img fluid={Post.data.featured_image.fluid} />
  } else {
    featured_image = <span />
  }

  let seoImage = ""
  if (Post.data.featured_image.fluid) {
    seoImage = Post.data.featured_image.fluid.src
  } else {
    seoImage = ""
  }

  const keywords = Post.data.keywords.text.split(",")

  return (
    <Layout>
      <SEO
        title={Post.data.title.text}
        image={seoImage}
        description={Post.data.excerpt.text}
        keywords={keywords}
      />
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.container} ${styles.isWidescreen}`}>
          <div className={`${styles.columns}`}>
            <div className={`${styles.column}`}>
              <div
                className={`${styles.content} ${styles.hasTextWhite} ${styles.isMedium}`}
              >
                <h1
                  className={`${styles.title} ${styles.hasTextWhite} ${styles.is1}`}
                >
                  {Post.data.title.text}
                </h1>
                <p
                  className={`${styles.subtitle} ${styles.is6} ${styles.hasTextLight}`}
                >
                  {" "}
                  By {Post.data.author.text} | {Post.data.published_date}
                </p>
                {featured_image}
                <hr />
                {blogBody}
                <hr />
              </div>
              <div className={`${styles.subscribe}`}>
                <iframe
                  src="https://swarnim.substack.com/embed"
                  width="640"
                  height="320"
                  style={{
                    border: `1px solid #EEE`,
                    background: `#fff`,
                  }}
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default blog
