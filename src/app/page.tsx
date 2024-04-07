"use client"
import Image from "next/image";
import styles from "@/styles/Homepage.module.css";
import bgImg from '@/assets/peakpx.jpg'
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Image src={bgImg} alt="" className={styles.fullbg2} quality={1} />
      <div className={styles.fullbg1}></div>
      <div className={styles.textBox}>
        <h1>Hello,</h1>
        <h2>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am Aryan',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'And I help brands grow with my content.',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>

      </div>
    </div>
  );
}
