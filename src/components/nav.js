import React, { useState } from "react"

import { Link } from "gatsby"

import styles from "./nav.module.scss"

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = e => {
    e.preventDefault()
    setIsExpanded(!isExpanded)
  }
  return (
    <nav
      className={`${styles.navbar}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className={`${styles.navbarBrand}`}>
        <Link className={`${styles.navbarItem}`} to="/">
          <h3>Swarnim Walavalkar</h3>
        </Link>

        <a
          onClick={e => handleToggle(e)}
          role="button"
          className={`${styles.navbarBurger} ${styles.burger} ${
            isExpanded ? styles.isActive : ""
          }`}
          aria-label="menu"
          aria-expanded="false"
          data-target="mainNavbar"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="mainNavbar"
        className={`${styles.navbarMenu}  ${isExpanded ? styles.isActive : ""}`}
      >
        <div className={`${styles.navbarEnd}`}>
          <Link className={`${styles.navbarItem}`} to="/">
            Home
          </Link>
          <Link className={`${styles.navbarItem}`} to="/about">
            About
          </Link>
          <Link className={`${styles.navbarItem}`} to="/contact">
            Contact
          </Link>
          <Link className={`${styles.navbarItem}`} to="/projects">
            Projects
          </Link>
          <Link className={`${styles.navbarItem}`} to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
