import React from 'react'
import styles from './BlogCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = (props) => {
  return (
    <Link  href={{pathname: '/blogposts/' + props.data["_id"].toString(), query: props.data}}>
      <div className={styles.blogcard}>
        <Image src={props.data["picture"]} width={200} height={200}></Image>
        <div className={styles.blogcontent}>
          <h1 className={styles.blogtitle}>{props.data["title"]}</h1>
          <p >{props.data["description"]}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard