import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  return (
    <button className={styles.button} style={props.style} onClick={props.onClick}>{props.name}</button>
  )
}

export default Button