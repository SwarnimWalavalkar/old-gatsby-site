import React from "react"

import styles from "./contact.module.scss"

import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

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
                  href="https://twitter.com"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/"
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
              <form action="POST" name="contact" data-netlify="true">
                <div className={`${styles.field}`}>
                  <label className={`${styles.label} ${styles.hasTextWhite}`}>
                    Name
                  </label>
                  <div className={`${styles.control}`}>
                    <input
                      className={`${styles.input} ${styles.isMedium}`}
                      type="text"
                      name="name"
                    />
                  </div>
                </div>
                <div className={`${styles.field}`}>
                  <label className={`${styles.label} ${styles.hasTextWhite}`}>
                    Email
                  </label>
                  <div className={`${styles.control}`}>
                    <input
                      className={`${styles.input} ${styles.isMedium}`}
                      type="text"
                      name="email"
                    />
                  </div>
                </div>
                <div className={`${styles.field}`}>
                  <label className={`${styles.label} ${styles.hasTextWhite}`}>
                    Message
                  </label>
                  <div className={`${styles.control}`}>
                    <textarea
                      className={`${styles.textarea} ${styles.isMedium}`}
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div className={`${styles.control}`}>
                  <button
                    type="submit"
                    className={`${styles.button} ${styles.isLink} ${styles.isFullwidth} ${styles.hasTextWeightMedium} ${styles.isMedium}`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Contact
