import React from "react"

import styles from "./contact.module.scss"

import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import ContactForm from "../components/ContactForm"

import Layout from "../components/layout"
const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <section className={`${styles.hero} ${styles.isFullheight}`}>
      <div className={`${styles.heroBody}`}>
        <div className={`${styles.container} ${styles.hasTextCentered}`}>
          <div
            className={`${styles.columns} ${styles.is8} ${styles.isVariable}`}
          >
            <div
              className={`${styles.column} ${styles.isTwoThirds} ${styles.hasTextLeft}`}
            >
              <h1
                className={`${styles.title} ${styles.hasTextWhite} ${styles.is1}`}
              >
                Contact Me
              </h1>
              <p className={`${styles.isSize4}`}>
                Contact me to make something awesome together!
                <br /> Or just say hi! 😀
              </p>
              <div className={`${styles.social}`}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/SwarnimVW"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/SwarnimWalavalkar"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/swarnim_walavalkar/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
              <a
                className={`${styles.button} ${styles.isLink}`}
                href="mailto:swarnim.walavalkar@gmail.com"
              >
                Send me an Email
              </a>
            </div>
            <div
              className={`${styles.column} ${styles.isOneThird} ${styles.hasTextLeft}`}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Contact
