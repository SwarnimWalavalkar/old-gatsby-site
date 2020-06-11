import React from "react"

import styles from "./blog.module.scss"

import SEO from "../components/seo"

import Layout from "../components/layout"
import BlogCard from "../components/blog-card"

import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicBlogPost {
        edges {
          node {
            data {
              title {
                text
              }
              featured_image {
                fluid(maxWidth: 1000, maxHeight: 800) {
                  ...GatsbyPrismicImageFluid
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
              published_date(formatString: "MMMM Do, YYYY")
            }
            uid
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
          {data.allPrismicBlogPost.edges.map(edge => (
            <div className={`${styles.column}`}>
              <BlogCard
                title={edge.node.data.title.text}
                excerpt={edge.node.data.excerpt.text}
                publishedDate={edge.node.data.published_date}
                author={edge.node.data.author.text}
                imageUrl={
                  edge.node.data.featured_image.fluid
                    ? edge.node.data.featured_image.fluid
                    : {}
                }
                url={`/blog/${edge.node.uid}`}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Blog
