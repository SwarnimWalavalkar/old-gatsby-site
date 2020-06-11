import React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"

import styles from "./blog-card.module.scss"

const BlogCard = ({ url, title, excerpt, imageUrl, author, publishedDate }) => {
  if (!imageUrl) {
    imageUrl = {}
  }

  return (
    <div className={`${styles.card} ${styles.article}`}>
      <div className={`${styles.cardContent}`}>
        <div className={`${styles.media}`}>
          <div className={`${styles.mediaContent} ${styles.hasTextCentered}`}>
            <div className={`${styles.cardImage}`}>
              <figure className={`${styles.image}`}>
                <Img fluid={imageUrl} />
              </figure>
            </div>
            <p
              className={`${styles.title} ${styles.articleTitle} ${styles.hasTextWhite}`}
            >
              {title}
            </p>
            <div
              className={`${styles.tags} ${styles.hasAddons} ${styles.levelItem}`}
            >
              <span
                className={`${styles.tag} ${styles.isRounded} ${styles.isInfo}`}
              >
                {author}
              </span>
              <span className={`${styles.tag} ${styles.isRounded}`}>
                {publishedDate}
              </span>
            </div>
          </div>
        </div>
        <div className={`${styles.content} ${styles.articleBody}`}>
          <p>{excerpt}</p>
          <div className={`${styles.linkWrapper}`}>
            <Link
              to={url}
              className={`${styles.button} ${styles.isInfo} ${styles.isOutlined}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
