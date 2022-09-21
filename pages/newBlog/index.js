import React from 'react'
import styles from "../../styles/Home.module.css"
import Button from '../../assets/components/Button/Button'

const index = () => {
  return (
    <div className={styles.main}>
        <form action="/api/blogposts" method="post" className={styles.forms}>
            <label htmlFor="title">Title: </label>
            <input
            type="text"
            name="title"
            className={[styles.input, styles.tinput].join(" ")}
            />
            <label htmlFor="description">Description: </label>
            <textarea name="description" cols="40" rows="2"  className={styles.input}></textarea>
            {/* <input
            type="text"
            name="description"
            className={[styles.input, styles.dinput].join(" ")}
            /> */}
            <label htmlFor="content">Content: </label>
            <textarea name="content" cols="40" rows="5" className={styles.input}></textarea>
            {/* <input
            type="text"
            name="content"
            className={[styles.input, styles.cinput].join(" ")}
            /> */}
            <label htmlFor="picture">Picture: </label>
            <input
            type="text"
            name="picture"
            className={[styles.input, styles.pinput].join(" ")}
            />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default index