import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image';
import { Parallax } from 'react-parallax';
import styles from './post.module.css'

// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));


const OneBlog = () => {
    const router = useRouter();
    const data = router.query;

    

    return (
    <div>
      <Parallax blur = {{min: -5, max: 5}} bgImage = {data["picture"]} strength={-200} bgImageStyle = {{}}>
        <div style={{height: 300}}></div>
      </Parallax>
      <div className={styles.container}>
        <div className={styles.title}>
          {data["title"]}
        </div>
        <div className={styles.content}>
          {data["content"]}
        </div>
      </div>
    </div>
  )

}

export default OneBlog