import React, { useState } from "react"
import Img from "gatsby-image"

import styles from "./Carousel.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"

export const Carousel = ({ imageUrls }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const url = imageUrls[currentImageIndex]

  return (
    <div>
      <div className={`${styles.container}`}>
        <Img fluid={url} />
      </div>

      <button
        onClick={() => {
          if (currentImageIndex <= 0) {
            setCurrentImageIndex(currentImageIndex)
          } else {
            setCurrentImageIndex(currentImageIndex - 1)
          }
        }}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <button
        onClick={() => {
          if (currentImageIndex >= imageUrls.length - 1) {
            setCurrentImageIndex(currentImageIndex)
          } else {
            setCurrentImageIndex(currentImageIndex + 1)
          }
        }}
      >
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </button>
    </div>
  )
}
