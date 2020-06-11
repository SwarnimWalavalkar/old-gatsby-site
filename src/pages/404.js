import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.content} ${styles.isLarge}`}>
          <h1
            className={`${styles.title} ${styles.is1} ${styles.hasTextWhite}`}
          >
            {"<404 />"}
          </h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
        <div className={`${styles.columns}`}>
          <div className={`${styles.column}`}>
            <Link className={`${styles.btn}`} to="/">
              Go to the Homepage
            </Link>
          </div>
          <div className={`${styles.column}`}>
            <Link className={`${styles.btn}`} to="/blog">
              Go to the Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
