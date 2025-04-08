'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import pagestyles from '../../page.module.css'
import styles from './heading.module.css'
import {motion,AnimatePresence} from 'motion/react'

const Span = ({text,delay,type}) => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % text.length);
        }, delay);
        return () => clearInterval(interval); 
    }, [delay,text.length]); 
  return (
    <div className={`${ type === 'role'? pagestyles.roleunderline:pagestyles.underline} ${styles.div}`}>
        <AnimatePresence mode='wait'>
            <motion.span 
                id={styles.textid}
                className={styles.text}
                key={text[index]}
                whileHover={{ color: "var(--projheading)" }}
                initial={{
                    bottom:-100
                }}
                animate={{
                    bottom:0,
                    transition:{
                        duration:0.25
                    }
                }}
                exit={{
                    top:-200
                }}
            >{text[index]}</motion.span>
        </AnimatePresence>
    </div>
  )
}

export default Span
