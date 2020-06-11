/*eslint-disable*/

import React from "react"
import { Link } from "gatsby"

import styles from "./project.module.scss"

const Project = ({ name, details, url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.bgHead}></div>
      <h1>{name}</h1>
      <p>{details}</p>
      <Link to={url}>Learn More</Link>
    </div>
  )
}

export default Project
