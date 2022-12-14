import bg from '../assets/pictures/bgimage.jpg'
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../assets/components/Button/Button';
import NavBar from '../assets/components/NavBar/NavBar';
import { useLottie } from "lottie-react";
import scrollAnimation from "../assets/Animation/scroll2.json"



import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../state/slices/counterSlice'



function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Home() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const optionsAnimation = {
    animationData: scrollAnimation,
    loop: true

  };

  const { View } = useLottie(optionsAnimation);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Procastinating Programmer</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      

        <main className={styles.main}>
          {/* <Tilt className={styles.glass} options={options}> */}
          <div className={styles.inglass}>
            <h1 className={styles.title}>
              S U R A J
            </h1>
            <h1 className={styles.title}>S H A H</h1>

            <p className={styles.description}>
              Bridging the gap between
            </p>
            {/* <Button name={count} onClick={() => dispatch(increment())} /> */}

          </div>
          <div className={styles.scroll}>{View}</div>
          {/* </Tilt> */}
        </main>
      </div>
    </>

  )
}
