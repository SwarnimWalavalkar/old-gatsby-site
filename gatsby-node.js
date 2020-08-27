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

  const blogQuery = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = blogQuery.data.allMdx.edges

  posts.forEach(edge => {
    actions.createPage({
      path: `/blog/${edge.node.frontmatter.slug}`,
      component: blogTemplate,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })

  //   const prismicBlogQuery = await graphql(`
  //     query AllPrismicBlogPost {
  //       allPrismicBlogPost {
  //         edges {
  //           node {
  //             uid
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   prismicBlogQuery.data.allPrismicBlogPost.edges.forEach(edge => {
  //     createPage({
  //       component: blogTemplate,
  //       path: `/blog/${edge.node.uid}`,
  //       context: {
  //         uid: edge.node.uid,
  //       },
  //     })
  //   })
}
