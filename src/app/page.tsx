"use client";
import Image from "next/image";
import styles from "@/styles/Homepage.module.css";
import bgImg from "@/assets/shera2.png";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* <Image src={bgImg} alt="" className={styles.fullbg2} quality={1} /> */}
      <div className={styles.fullbg1}></div>
      <div className={styles.contentContainer}>
        <div className={styles.textBox}>
          <h1>Hello,</h1>
          <h2>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "I am Aryan",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "And I help brands grow",
                1000,
                "And I help brands grow\nwith my content.",
                1000,
              ]}
              wrapper="span"
              style={{ whiteSpace: "pre-line" }}
              speed={20}
              repeat={Infinity}
            />
          </h2>
        </div>
        <div className={styles.profileImage}>
          <button className={styles.leftButton}>CRM</button>
          <button className={styles.rightButton}>MARKETING</button>
          <Image
            src={bgImg}
            alt="Aryan profile"
            width={500}
            height={500}
            quality={90}
            priority
            className={styles.profileImg}
          />
        </div>
      </div>
    </div>
  );
}
