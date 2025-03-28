'use client'
import React from 'react'
import styles from './project.module.css'
// import Image from 'next/image'

const Project = ({heading,description,tech,url,vidsrc}) => {
  return (
    <a className={styles.container}href={url}target='_blank'>
      <video className={styles.video}src={vidsrc} type='video/webm' muted autoPlay loop>
        {/* <Image src={picsrc}alt={heading}width={100}height={100}/> */}
        Your browser does not support video playback
      </video>
        <div className={styles.infocontainer}>
          <h4 className={styles.projheading}>{heading}</h4>
          <p className={styles.projdescr}>{description}</p>
          <p className={styles.projtech}>{tech}</p>
        </div>
    </a>
  )
}

export default Project;
