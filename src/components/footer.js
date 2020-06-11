import React from "react"

import { useStaticQuery, graphql } from "gatsby"

import styles from "./footer.module.scss"

// // Social media icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTwitter } from "@fortawesome/free-brands-svg-icons"
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"
// import { faGithub } from "@fortawesome/free-brands-svg-icons"
// import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.content} ${styles.isPulledLeft}`}>
        <p>&copy; Swarnim Walavalkar {new Date().getFullYear().toString()}</p>
      </div>
      <div className={`${styles.content} ${styles.isPulledRight}`}>
        <p>
          Built with{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GatsbyJS
          </a>{" "}
          & <a href="https://bulma.io/">Bulma CSS</a>
        </p>
        <p>
          Icons Provided by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://fontawesome.com/"
          >
            FontAwesome
          </a>{" "}
          &{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com/"
          >
            icons8
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
