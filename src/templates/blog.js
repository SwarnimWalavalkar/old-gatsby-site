import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"

import Highlight, { defaultProps } from "prism-react-renderer"

import dracula from "prism-react-renderer/themes/dracula"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./blog.module.scss"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featureImage {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyImageSharpFluid
              src
            }
            fixed(width: 1280, height: 720) {
              ...GatsbyImageSharpFixed
            }
          }
          publicURL
        }
        author
        slug
        date(formatString: "MMMM Do, YYYY")
        excerpt
        keywords
      }
      body
      rawBody
    }
  }
`

const blog = ({ data }) => {
  const { mdx: Post } = data

  let featuredImage
  if (Post.frontmatter.featureImage.childImageSharp.fluid) {
    featuredImage = (
      <Img fluid={Post.frontmatter.featureImage.childImageSharp.fluid} />
    )
  } else {
    featuredImage = <span />
  }

  let seoImage = ""
  if (Post.frontmatter.featureImage) {
    seoImage = `https://www.swarnimwalavalkar.com${Post.frontmatter.featureImage.publicURL}`
  } else {
    seoImage = ""
  }

  const keywords = Post.frontmatter.keywords.split(",")

  const components = {
    pre: props => {
      const className = props.children.props.className || ""
      const matches = className.match(/language-(?<lang>.*)/)
      return (
        <Highlight
          {...defaultProps}
          theme={dracula}
          code={props.children.props.children.trim()}
          language={
            matches && matches.groups && matches.groups.lang
              ? matches.groups.lang
              : ""
          }
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      )
    },
  }

  return (
    <Layout>
      <SEO
        title={Post.frontmatter.title}
        image={seoImage}
        description={Post.frontmatter.excerpt}
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
                  {Post.frontmatter.title}
                </h1>
                <p
                  className={`${styles.subtitle} ${styles.is6} ${styles.hasTextLight}`}
                >
                  By {Post.frontmatter.author} | {Post.frontmatter.date}
                </p>
                {featuredImage}
                <hr />
                <MDXProvider components={components}>
                  <MDXRenderer>{Post.body}</MDXRenderer>
                </MDXProvider>
                <hr />
              </div>
              <div className={`${styles.subscribe}`}>
                <iframe
                  width="540"
                  height="900"
                  src="https://43d13095.sibforms.com/serve/MUIEAMyHAtp9n48iK7s08ZWehsRW7jk239MYJtWFJjuptJAc6xKC_2CaS0IxVIQ6xzPxCaqTEYVhpVy162xOgt-vRtazNjMsx77sMB5uk-Txj7cQHEc5iAJeR-rYhJCgca8Q1ANkFVDhz-dpNw9Zf84yz6YcLSUPevKlgjZA5YML2GzNpY2xaaosS2VE1f8DLEdhYh2-K5_59vl_"
                  frameborder="0"
                  allowfullscreen
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
