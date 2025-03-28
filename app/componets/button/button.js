'use client'
import React from 'react'
import styles from './button.module.css'
import { motion } from 'motion/react'

const Button = (props) => {
  return (
    <motion.button 
      className={styles.button} 
      onClick={props.stateupdate}
      whileHover={{scale: 1.1}}
      whileTap={{scale:0.75}}
    >{props.text}</motion.button>
  )
}

export default Button
