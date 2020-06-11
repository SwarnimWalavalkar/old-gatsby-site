import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import styles from "./about.module.scss"

import calculateAge from "../utils/calculateAge"

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <section className={`${styles.hero} ${styles.isFullheight}`}>
        <div className={`${styles.heroBody}`}>
          <div className={`${styles.container} ${styles.hasTextCentered}`}>
            <div
              className={`${styles.columns} ${styles.is8} ${styles.isVariable}`}
            >
              <div
                className={`${styles.column} ${styles.isHalf} ${styles.hasTextLeft}`}
              >
                <h1
                  className={`${styles.title} ${styles.hasTextWhite} ${styles.is1}`}
                >
                  About Me
                </h1>
                <p className={`${styles.isSize4}`}>A bit more about myself.</p>
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
                <Link
                  className={`${styles.button} ${styles.isLink}`}
                  to="/contact"
                >
                  Contact me
                </Link>
              </div>
              <div
                className={`${styles.column} ${styles.isHalf} ${styles.hasTextLeft}`}
              >
                <div class={`${styles.content} ${styles.isMedium}`}>
                  <h1 className={`${styles.hasTextWhite}`}>👋 Hello World</h1>
                  <p>
                    Hi! I’m Swarnim, a {calculateAge(new Date(2002, 11, 18))}
                    -year-old Software Developer from Mumbai, India.
                  </p>
                  <p>
                    I spend my time building projects and learning as much as I
                    can along the way. I’ve worked with various technologies
                    from Making Android apps and making native Windows Programs
                    with the .NET framework to various web technologies like
                    React, GraphQL, NodeJS, and everything in between.
                  </p>
                  <p>
                    I build projects to expand my horizons. I try to build tools
                    and services that are a delight to use and inspire to build
                    the future.
                  </p>
                  <h2 className={`${styles.hasTextWhite}`}>🚀 My Story</h2>
                  <p>
                    I started Programming when I was 13, and I've never fallen
                    out of love with it since.
                  </p>
                  <p>
                    At first It was building some simple websites with HTML and
                    CSS and some fun little scripts with Java but as my
                    curiosity grew so did my passion. And I've been exploring
                    and growing ever since.
                  </p>
                  <h2 className={`${styles.hasTextWhite}`}>
                    👥 Other Aliases:
                  </h2>
                  <p>
                    You may know me as Pop Club. That was my username when I
                    used to run a blog about Video Games when I was about 10-11
                    Years old. I didn't want to use my real name at the time.
                  </p>
                  <p>
                    The Name "Pop Club" was just the concatenation of two of my
                    favorite games at the time,{" "}
                    <a
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Club_Penguin"
                    >
                      Club Penguin
                    </a>{" "}
                    and{" "}
                    <a
                      target="_blank"
                      href="https://en.wikipedia.org/wiki/Poptropica"
                    >
                      Poptropica
                    </a>
                    . That was also what most of my content was based around.
                    Although Later I expanded to other games.
                  </p>
                  <p>
                    With time as my interests changed so did my blog. And
                    eventually I started to write more on Technology and
                    Software Development.
                  </p>
                  <p>
                    Running the Pop Club Blog was one of the best experiences
                    I've had. I met some incredible people along the way and
                    learnt a lot.
                  </p>
                  <h2 className={`${styles.hasTextWhite}`}>
                    ⌨ About This Blog:
                  </h2>
                  <p>
                    <em>"Docendo discimus"</em> - “By teaching, we learn.”
                  </p>{" "}
                  <p>
                    That’s kinda my philosophy with the blog.. this will be a
                    platform for me to share everything I learn. I also plan to
                    write about books I read and elaborate some of my ideas and
                    thoughts.
                  </p>
                  <p>
                    Here’s a List of the type of content you can expect on the
                    blog:
                  </p>
                  <ul>
                    <li>Technical Breakdowns and Tutorials</li>
                    <li> Book Reviews and Summaries</li>
                    <li> Software Development Logs</li>
                    <li> And Also some Software Reviews</li>
                  </ul>
                  <p>Hope you find value in my content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About
