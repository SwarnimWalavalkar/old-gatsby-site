import React from "react"

import styles from "./blog.module.scss"

import SEO from "../components/seo"

import Layout from "../components/layout"
import BlogCard from "../components/BlogCard"

import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
              excerpt
              date(formatString: "MMMM Do, YYYY")
              author
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
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Blog" />
      <header className={styles.header}>
        <h1>Blog</h1>
      </header>

      <section className={`${styles.wrapper}`}>
        <div className={`${styles.container} ${styles.isWidescreen}`}>
          {data.allMdx.edges.map(edge => (
            <div className={`${styles.column}`}>
              <BlogCard
                title={edge.node.frontmatter.title}
                excerpt={edge.node.frontmatter.excerpt}
                publishedDate={edge.node.frontmatter.date}
                author={edge.node.frontmatter.author}
                imageUrl={
                  edge.node.frontmatter.featureImage.childImageSharp.fluid
                    ? edge.node.frontmatter.featureImage.childImageSharp.fluid
                    : {}
                }
                url={`/blog/${edge.node.frontmatter.slug}`}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Blog
