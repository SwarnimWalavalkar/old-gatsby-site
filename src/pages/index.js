import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Tippy from "@tippyjs/react"
import "tippy.js/dist/tippy.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Project from "../components/project"

import Particles from "react-particles-js"

import styles from "./index.module.scss"

// ******************Icons********************************************
import javascript from "../data/images/icons/javascript.svg"
import node from "../data/images/icons/nodejs.svg"
import mongodb from "../data/images/icons/mongodb.svg"
import react from "../data/images/icons/react.svg"
import graphqlImg from "../data/images/icons/graphql.svg"
import html5 from "../data/images/icons/html5.svg"
import css3 from "../data/images/icons/css3.svg"
import python from "../data/images/icons/python.svg"
import firebase from "../data/images/icons/firebase.svg"
import java from "../data/images/icons/java.svg"
import android from "../data/images/icons/android.svg"
// ******************Icons********************************************

// Social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import particlesParams from "../particlesParam.json"

import calculateAge from "../utils/calculateAge"

const IndexPage = () => {
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
      <SEO title="Home" />
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1>
            Hi There!{" "}
            <span role="img" aria-label="wave-emoji">
              👋
            </span>
          </h1>
          <p>I'm Swarnim, Pleasure Meeting you.</p>
          <p>
            I strive to create empowering software experiences <br /> for
            creative individuals to do incredible things.
          </p>
          <Link className={styles.CTA1} to="/projects/">
            See Projects
          </Link>
          <Link className={styles.CTA2} to="/contact/">
            Contact Me
          </Link>
        </div>
        <Particles className={styles.particles} params={particlesParams} />
      </section>

      <section className={styles.icons}>
        <div
          className={`${styles.container} ${styles.isCentered} ${styles.isFluid}`}
        >
          <div
            className={`${styles.columns} ${styles.isMobile} ${styles.isCentered}`}
          >
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="Javascript">
                <img src={javascript} alt="Javascript" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="NodeJS">
                <img src={node} alt="NodeJS" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="MongoDB">
                <img src={mongodb} alt="MongoDB" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="ReactJS">
                <img src={react} alt="ReactJS" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="GraphQL">
                <img src={graphqlImg} alt="GraphQL" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="HTML">
                <img src={html5} alt="HTML" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="CSS">
                <img src={css3} alt="CSS" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="Python">
                <img src={python} alt="Python" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="Firebase">
                <img src={firebase} alt="Firebase" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="Java">
                <img src={java} alt="Java" />
              </Tippy>
            </div>
            <div className={`${styles.column} ${styles.isOneQuarterMobile}`}>
              <Tippy content="Android">
                <img src={android} alt="Android" />
              </Tippy>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.aboutMe} ${styles.containerFluid}`}>
        <div
          className={`${styles.columns} ${styles.isCentered} ${styles.isWidescreen}`}
        >
          <div className={`${styles.column} ${styles.isHalf}`}>
            <h3>About Me</h3>
          </div>
        </div>
        <div
          className={`${styles.columns} ${styles.isCentered} ${styles.isWidescreen}`}
        >
          <div className={`${styles.column} ${styles.isHalf}`}>
            <hr />
          </div>
        </div>
        <div
          className={`${styles.columns} ${styles.isCentered} ${styles.isWidescreen}`}
        >
          <div
            className={`${styles.column} ${styles.content} ${styles.isHalf}`}
          >
            <p>
              Hi! I’m Swarnim, a {calculateAge(new Date(2002, 11, 18))}
              -year-old Software Developer from Mumbai, India.
            </p>
            <p>
              I spend my time building projects and learning as much as I can
              along the way. I’ve worked with various technologies from Making
              Android apps and working with the .NET framework to various web
              technologies like React, GraphQL, NodeJS, and everything in
              between.
            </p>
            <p>
              I build projects to expand my horizons. I try to build tools and
              services that are a delight to use and inspire to build the
              future.
            </p>
            <Link
              to="/about"
              className={`${styles.button} ${styles.isDark} ${styles.isInverted} ${styles.isOutlined}`}
            >
              Learn More About me
            </Link>
          </div>
        </div>
        <div
          className={`${styles.columns} ${styles.isCentered} ${styles.isWidescreen}`}
        >
          <div className={`${styles.column} ${styles.isHalf}`}>
            <div className={`${styles.social}`}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/swarnim_vw"
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
          </div>
        </div>
      </section>
      <section className={`${styles.projectsSection}`}>
        <h3>Some Of My Projects:</h3>
        <div
          className={`${styles.columns} ${styles.isMobile} ${styles.isMultiline} ${styles.isCentered}`}
        >
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
        <Link className={`${styles.viewMoreBtn}`} to="/projects">
          View More
        </Link>
      </section>
    </Layout>
  )
}

export default IndexPage
