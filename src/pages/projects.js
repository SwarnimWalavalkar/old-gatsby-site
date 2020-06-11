import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import SEO from "../components/seo"

import Layout from "../components/layout"

import Project from "../components/project"

import styles from "./projects.module.scss"

const Projects = () => {
  /* Primsic Query */
  const data = useStaticQuery(graphql`
    query {
      allPrismicProject {
        edges {
          node {
            data {
              name {
                text
              }
              blurb
            }
            uid
            id
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Projects" />
      <header className={styles.header}>
        <h1>Projects</h1>
      </header>

      <section className={`${styles.projectsContainer}`}>
        <div className={`${styles.columns} ${styles.isCentered}`}>
          {data.allPrismicProject.edges.map(edge => (
            <div key={edge.node.id} className={`${styles.column}`}>
              <Project
                name={edge.node.data.name.text}
                details={edge.node.data.blurb}
                url={`/projects/${edge.node.uid}`}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Projects
