import React from "react"
import { graphql } from "gatsby"

import { RichText } from "prismic-reactjs"

import SEO from "../components/seo"

import Img from "gatsby-image"

import Layout from "../components/layout"
import { Carousel } from "../components/Carousel"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import styles from "./project.module.scss"

export const query = graphql`
  query PrismicProject($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      id
      data {
        name {
          text
        }
        blurb
        stack
        demo_link {
          url
        }
        github_link {
          url
        }

        images {
          image {
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyPrismicImageFluid
              src
            }
            fixed(width: 1280, height: 720) {
              ...GatsbyPrismicImageFixed
              src
            }
          }
        }

        body {
          ... on PrismicProjectBodyRichText {
            slice_type
            id
            primary {
              rich_text {
                html
                raw
              }
            }
          }
          ... on PrismicProjectBodyImage {
            slice_type
            id
            primary {
              image {
                fixed(width: 1280, height: 720) {
                  src
                }
              }
            }
          }
          ... on PrismicProjectBodySectionTitle {
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

const Project = ({ data }) => {
  const { prismicProject: Project } = data

  let images = []
  Project.data.images.map(img => images.push(img.image.fluid))

  let name = Project.data.name.text
  let stack = Project.data.stack
  let blurb = Project.data.blurb

  console.log("Name:", name)
  console.log("images:", images)

  const body = Project.data.body.map((slice, index) => {
    switch (slice.slice_type) {
      case "rich_text":
        return <div>{RichText.render(slice.primary.rich_text.raw)}</div>
      case "section_title":
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

  return (
    <Layout>
      <SEO title={name} description={blurb} />
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
                  {name}
                </h1>
                <Carousel imageUrls={images} />
                <div className={`${styles.columns}`}>
                  <div className={`${styles.column}`}>
                    <a
                      target="_blank"
                      className={`${styles.button}`}
                      href={Project.data.github_link.url}
                    >
                      <span className={``}>
                        <FontAwesomeIcon icon={faGithub} />
                      </span>{" "}
                      Github Link
                    </a>
                    <a
                      target="_blank"
                      className={`${styles.button}`}
                      href={Project.data.demo_link.url}
                    >
                      Demo Link
                    </a>
                  </div>
                </div>
                <hr />
                {body}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
