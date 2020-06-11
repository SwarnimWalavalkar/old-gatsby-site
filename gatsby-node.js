/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const prismicProjectQuery = await graphql(`
    query {
      allPrismicProject {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  prismicProjectQuery.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.uid}`,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  const prismicBlogQuery = await graphql(`
    query AllPrismicBlogPost {
      allPrismicBlogPost {
        edges {
          node {
            uid
          }
        }
      }
    }
  `)

  prismicBlogQuery.data.allPrismicBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.uid}`,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
