import Image from "next/image";
import styles from "@/styles/About.module.css";
import photo from '@/assets/About/PiyushPandey.png'
export default function Home() {

  return (
    <div className={styles.aboutpage}>

      <div className={styles.row}>
        <div className={styles.quote}>
          <Image src={photo} width={1000} height={1000} quality={100} alt="" />

          <div className={styles.textbox}>

            <p>
              &quot; Always ensure that what you say brings a smile to the recipients. &quot;
            </p>
            <p className={styles.name}>Piyush Pandey</p>
          </div>
        </div>
        <div className={styles.aboutin}>
          <h1>About Me</h1>
          <p className={styles.para}>
            I grew up in a vibrant tier 2 city, where every TV ad crafted by Piyush Pandey felt like a miniature masterpiece. From the iconic Hutch pug to the adorable Vodafone Zoozoos, these campaigns ignited my passion for storytelling and advertising.
          </p>
          <p className={styles.para}>
            One of my core beliefs in marketing is that people don&apos;t just buy goods and services; they invest in relationships, stories, and moments of magic. This philosophy fuels my approach to creating captivating campaigns that leave a lasting impact.
          </p>
          <p className={styles.para}>
            In the words of PewDiePie, &quot;Don&apos;t be Salad, be the best damn broccoli you could ever be.&quot; This mantra resonates deeply with me, pushing me to strive for excellence and uniqueness in every project I undertake.
          </p>
          <p className={styles.para}>
            Join me on this journey of turning ideas into reality, crafting compelling narratives, and adding a touch of magic to every brand&apos;s story.
          </p>
          <p className={styles.para}>
            Let&apos;s create something extraordinary together!
          </p>
        </div>
      </div>
    </div>
  );
}
