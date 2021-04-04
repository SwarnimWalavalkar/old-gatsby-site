const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://swarnimwalavalkar.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Swarmim Walavalkar`,
    description: `Swarnim Walavalkar's Official Blog and Website`,
    author: `Swarnim Walavalkar`,
    twitterUsername: "@SwarnimVW",
    url: "https://swarnimwalavalkar.com",
    siteUrl,
    image: "images/head-image.png",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GANALYTICSTRACKINGID,
        head: true,
        anonymize: true,
      },
    },

    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `swarnim-walavalkar-site`,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: ({ node, key, value }) => doc => {
          // Pretty URLs for known types
          if (doc.type === "blog_post") return "/blog/" + doc.uid
          if (doc.type === "project") return "/projects/" + doc.uid
          // Fallback for other types, in case new custom types get created
          return "/doc/" + doc.id
        },
        schemas: {
          project: require("./src/schemas/project.json"),
          blog_post: require("./src/schemas/blog_post.json"),
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve(`./src/templates/blog.js`),
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Swarnim Walavalkar's Official Website`,
        short_name: `Swarnim Walavalkar`,
        start_url: `/`,
        background_color: `#1B2C52`,
        theme_color: `#151923`,
        icon: `src/data/images/swarnim-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
