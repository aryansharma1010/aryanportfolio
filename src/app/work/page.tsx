"use client";
import WorkSlider from "@/components/WorkSlider.js";
import styles from "@/styles/Work.module.css";
import yeKesiBimariHai from "@/assets/BrandingAds/yeKesiBimariHai.jpg";
import crmPoster from "@/assets/CRM/CRMPoster.jpeg";
import dMotion from "@/assets/CRM/3dMotion.png";
import brandingForNeo from "@/assets/CRM/BrandingWorkForNeo.png";
import emailers from "@/assets/CRM/emailers.png";
import appBanners from "@/assets/CRM/inAppBanners.png";
import yeKyaHogya from "@/assets/BrandingAds/yeKyaHogya.jpg";
import CreateTheNextBigApp from "@/assets/ProductAds/CreateTheNextBigApp.jpg";
import DevopsEngineerSalary from "@/assets/ProductAds/DevopsEngineerSalary.jpg";
import FullStackDevelopment from "@/assets/ProductAds/FullStackDevelopment.jpg";
import threeNinety from "@/assets/ProductAds/threeNinety.jpg";
import Mario from "@/assets/GamingThemeAds/Mario.png";
import GamingNostalgia from "@/assets/GamingThemeAds/GamingNostalgia.png";
import DataAnalytics from "@/assets/MoreAds1/DataAnalytics.png";
import gfgCIP from "@/assets/MoreAds1/gfgCIP.png";
import gfgGate from "@/assets/MoreAds1/gfgGate.png";
import campusMantri from "@/assets/MoreAds2/campusMantri.png";
import gfgCarnival from "@/assets/MoreAds2/gfgCarnival.png";
import gfgIOS from "@/assets/MoreAds2/gfgIOS.png";
import gfgReview from "@/assets/GFGREVIEW/gfgReview.jpg";
import geekdigest from "@/assets/GFGdigest/geekdigest.png";
import gfgInsta from "@/assets/InstaFrenzy/gfgInsta.png";

import { InstagramEmbed } from "react-social-media-embed";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image, { StaticImageData } from "next/image";
import WorkCard from "@/components/WorkCard";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

interface FULLWORK {
  heading: string;
  description: string;
  longdescription: string;
  poster: StaticImageData;
  routeto: string;
  data: {
    title: string;
    image: StaticImageData | null;
    link: string;
    itemtype: null | string;
  }[];
}
export default function Home() {
  const BrandingAds = [
    {
      title: "Ye Kaisi Bimari Hai",
      image: yeKesiBimariHai,
      link: "https://www.youtube.com/watch?v=zbBALFXGy4Y",
      itemtype: "youtube",
    },
    {
      title: "Ye Kya Hogya",
      image: yeKyaHogya,
      link: "https://youtu.be/v41P3Y5Xol8?si=qybXtFHhM-3qNQ3i",
      itemtype: "youtube",
    },
  ];
  const ProductAds = [
    {
      title: "Create Your Own Apps Today",
      image: CreateTheNextBigApp,
      link: "https://www.youtube.com/watch?v=LycNCWC3g18",
      itemtype: "youtube",
    },
    {
      title: "Ace your DevOps interview",
      image: DevopsEngineerSalary,
      link: "https://www.youtube.com/watch?v=I-J28pjrTc8",
      itemtype: "youtube",
    },
    {
      title: "Full Stack Development",
      image: FullStackDevelopment,
      link: "https://www.youtube.com/watch?v=cBfC9HLR9Qk",
      itemtype: "youtube",
    },
    {
      title: "Three 90 Challenge !!",
      image: threeNinety,
      link: "https://www.youtube.com/watch?v=Vtxq-yHdKpA",
      itemtype: "youtube",
    },
  ];
  const MarioAds = [
    {
      title: "Job-a-thon-X-Geeks-for-Geeks",
      image: Mario,
      link: "https://www.behance.net/embed/project/157355269?ilo0=1",
      itemtype: "behance",
    },
  ];
  const GamingNostalgiaAds = [
    {
      title: "Weekly-Interview-Series-X-Geeks-for-Geeks",
      image: GamingNostalgia,
      link: "https://www.behance.net/embed/project/157354605?ilo0=1",
      itemtype: "behance",
    },
  ];
  const MoreAds1 = [
    {
      title: "GATE-Display-Ad",
      image: gfgGate,
      link: "https://www.behance.net/embed/project/192629115?ilo0=1",
      itemtype: "behance",
    },
    {
      title: "Data-Analytics-Ad-Copy",
      image: DataAnalytics,
      link: "https://www.behance.net/embed/project/192628809?ilo0=1",
      itemtype: "behance",
    },
    {
      title: "Geeks-for-Geeks-x-CIP",
      image: gfgCIP,
      link: "https://www.behance.net/embed/project/157353337?ilo0=1",
      itemtype: "behance",
    },
  ];
  const MoreAds2 = [
    {
      title: "Campus-Mantri-x-Geeks-for-Geeks",
      image: campusMantri,
      link: "https://www.behance.net/embed/project/158618351?ilo0=1",
      itemtype: "behance",
    },
    {
      title: "Geeks-summer-carnival",
      image: gfgCarnival,
      link: "https://www.behance.net/embed/project/179646427?ilo0=1",
      itemtype: "behance",
    },
    {
      title: "GfG-iOS-app-launch-trailer",
      image: gfgIOS,
      link: "https://www.behance.net/embed/project/159297555?ilo0=1",
      itemtype: "behance",
    },
  ];
  const GfgDigest = [
    {
      title: "Geeks For Geeks Digest",
      image: null,
      link: "https://media.geeksforgeeks.org/geeks-digest/2022/2022-03_March+2022+Edition_72dd31b3382750d23c43b738b4529654.pdf",
      itemtype: "geekdigest",
    },
  ];
  const GFGReview = [
    {
      title: "GeeksforGeeks In a Review 2023",
      image: gfgReview,
      link: "https://www.youtube.com/watch?v=q_kEa8oBo2A",
      itemtype: "youtube",
    },
  ];
  const GFGInsta = [
    {
      title: "GeeksforGeeks In a Review 2023",
      image: gfgReview,
      link: "https://www.youtube.com/watch?v=q_kEa8oBo2A",
      itemtype: "youtube",
    },
  ];

  const fullWorkArray: FULLWORK[] = [
    {
      heading: "My CRM portfolio",
      description: "I build CRM funnels that convert.",
      longdescription:
        "Through meticulous design and strategic messaging, I crafted compelling branding ads that resonate with audiences. By blending creativity with market insights, these ads drive brand recognition, foster customer engagement, and amplify brand identity, leaving a lasting impression on viewers.",
      poster: crmPoster,
      routeto: "https://www.behance.net/gallery/227664911/CRM-Portfolio",
      data: BrandingAds,
    },
    {
      heading: "3D Motion Graphic vedios for NeoZAP",
      description:
        "Crafted immersive 3d animations to bring NeoZAP's tech stories to life.",
      longdescription:
        "Through meticulous design and strategic messaging, I crafted compelling branding ads that resonate with audiences. By blending creativity with market insights, these ads drive brand recognition, foster customer engagement, and amplify brand identity, leaving a lasting impression on viewers.",
      poster: dMotion,
      routeto:
        "https://www.behance.net/gallery/227023855/3D-motion-Graphic-Branding-Videos-for-NeoZAP",
      data: BrandingAds,
    },
    {
      heading: "In App Banner vedios for NeoZAP",
      description:
        "Designed snappy motion banners to drive in app engagement and user action.",
      longdescription:
        "Through meticulous design and strategic messaging, I crafted compelling branding ads that resonate with audiences. By blending creativity with market insights, these ads drive brand recognition, foster customer engagement, and amplify brand identity, leaving a lasting impression on viewers.",
      poster: appBanners,
      routeto:
        "https://www.behance.net/gallery/227022393/In-App-Banner-Videos-for-NeoZAP",
      data: BrandingAds,
    },
    {
      heading: "Emailers for NeoZAP",
      description:
        "Created visually compelling email campaigns to boost clicks and conversions.",
      longdescription:
        "Through meticulous design and strategic messaging, I crafted compelling branding ads that resonate with audiences. By blending creativity with market insights, these ads drive brand recognition, foster customer engagement, and amplify brand identity, leaving a lasting impression on viewers.",
      poster: emailers,
      routeto: "https://www.behance.net/gallery/227022003/Emailers-for-NeoZAP",
      data: BrandingAds,
    },
    {
      heading: "Branding/Banner work for NeoZAP",
      description:
        "Delivered bold, consitent visual identities across digital brand touchpoints.",
      longdescription:
        "Through meticulous design and strategic messaging, I crafted compelling branding ads that resonate with audiences. By blending creativity with market insights, these ads drive brand recognition, foster customer engagement, and amplify brand identity, leaving a lasting impression on viewers.",
      poster: brandingForNeo,
      routeto:
        "https://www.behance.net/gallery/227021269/BrandingBanner-Work-for-NeoZAP",
      data: BrandingAds,
    },
    {
      heading: "Branding ads I made",
      description: "Captivating ads drive engagement for brands.",
      longdescription:
        "Through meticulous design and strategic messaging, I crafted compelling branding ads that resonate with audiences. By blending creativity with market insights, these ads drive brand recognition, foster customer engagement, and amplify brand identity, leaving a lasting impression on viewers.",
      poster: yeKesiBimariHai,
      routeto: "/work/brandingads",
      data: BrandingAds,
    },
    {
      heading: "Product ads I made",
      description: "Highlighting features, driving sales effectively.",
      longdescription:
        "I meticulously conceptualized and executed impactful product ads, harnessing persuasive visuals and compelling narratives to showcase each product's unique value proposition. These ads seamlessly blend creativity and strategic marketing, driving sales, and igniting consumer interest and desire.",
      poster: CreateTheNextBigApp,
      routeto: "/work/productads",
      data: ProductAds,
    },
    {
      heading: "Crafting Ads that Break the Mold",
      description:
        "Mario-themed ad captivates geek audience, breaking monotony.",
      longdescription:
        "Transitioning from Mario player to creator, I spearheaded an ad campaign that resonated deeply with our geek-centric brand identity. Breaking through advertising monotony, this attention-grabbing ad not only intrigued viewers but also injected a cool factor into our job-a-thon, garnering significant attention and engagement.",
      poster: Mario,
      routeto: "/work/marioads",
      data: MarioAds,
    },
    {
      heading: "The Gaming Nostalgia Never ends",
      description:
        "Rediscover timeless gaming memories, relive the magic endlessly.",
      longdescription:
        "Embark on a journey through nostalgia as you rediscover timeless gaming memories. Dive into cherished classics and relive the magic endlessly.",
      poster: GamingNostalgia,
      routeto: "/work/gamingads",
      data: GamingNostalgiaAds,
    },
    {
      heading: "Success Unleashed: Display Campaign at GeeksforGeeks",
      description:
        "High CTR, low bounce rate display campaign at GeeksforGeeks.",
      longdescription:
        "Our display campaign at GeeksforGeeks achieved remarkable success with a high click-through rate and low bounce rate. Engage your audience effectively with our proven strategies.",
      poster: gfgGate,
      routeto: "/work/gfgdisplayads",
      data: MoreAds1,
    },
    {
      heading: "Motion Graphic Ads",
      description: "Pushing possibilities in commercials with motion graphics.",
      longdescription:
        "Explore the possibilities of motion graphics in commercials as we push boundaries and captivate audiences with dynamic visuals and engaging storytelling.",
      poster: campusMantri,
      routeto: "/work/motiongraphicads",
      data: MoreAds2,
    },
    {
      heading: "Geeks For Geeks Review",
      description:
        "Have a look at How we changed the world in 2023, and how we plan to revolutionize your coding journey in 2024!",
      longdescription:
        "Have a look at How we changed the world in 2023, and how we plan to revolutionize your coding journey in 2024!",
      poster: gfgReview,
      routeto: "/work/geekreview",
      data: GFGReview,
    },
    {
      heading: "Geeks For Geeks Digest",
      description:
        "I conceptualized and solely edited the 1st edition of Geeks Digest, now its chief strategist.",
      longdescription:
        "As the chief strategist, I conceptualized and solely edited the first edition of Geeks Digest, shaping it into a premier publication for tech enthusiasts worldwide.",
      poster: geekdigest,
      routeto: "/work/geekdigest",
      data: GfgDigest,
    },
    {
      heading: "Geeks For Geeks Instagram posts",
      description:
        "Geeks For Geeks regularly shares informative and engaging content on their Instagram profile, catering to the tech-savvy community's interests and needs.",
      longdescription:
        "Geeks For Geeks regularly shares informative and engaging content on their Instagram profile, catering to the tech-savvy community's interests and needs. From coding tips and tricks to career guidance and industry insights, their posts cover a wide range of topics relevant to aspiring and seasoned programmers alike.",
      poster: gfgInsta,
      routeto: "/work/geekinstagram",
      data: [],
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className={styles.btngroup}>
        <button onClick={() => previous()} className={styles.leftbtn}>
          <FiChevronLeft />
        </button>
        <button className={styles.rightbtn} onClick={() => next()}>
          <BiChevronRight />
        </button>
      </div>
    );
  };
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.workpage}>
      <div className={styles.textBox}>
        <h1>My Projects</h1>
        <p>
          I have curated a diverse portfolio of branding and product
          advertisements, showcasing my expertise in crafting engaging content
          across various platforms. From captivating gaming nostalgia to motion
          graphic ads, my work has garnered attention and success, driving high
          click-through rates and engagement.
        </p>
      </div>

      <div className={styles.carousel}>
        {windowWidth > 650 ? (
          <Carousel
            responsive={responsive}
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroup />}
          >
            {fullWorkArray.map((item, index) => (
              <div className={styles.workcard} key={index}>
                <div className={styles.poster}>
                  <Image src={item.poster} alt="" quality={1} />
                </div>
                <div className={styles.workcardtext}>
                  <h2>{item.heading}</h2>
                  <p>{item.description}</p>
                  <Link
                    href={item.routeto}
                    target={
                      item.routeto.includes("https") ? "_blank" : undefined
                    }
                    rel={
                      item.routeto.includes("https")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className={styles.workGrid}>
            {fullWorkArray.map((item, index) => (
              <div className={styles.workcard} key={index}>
                <div className={styles.poster}>
                  <Image src={item.poster} alt="" quality={1} />
                </div>
                <div className={styles.workcardtext}>
                  <h2>{item.heading}</h2>
                  <p>{item.description}</p>
                  <Link
                    href={item.routeto}
                    target={
                      item.routeto.includes("https") ? "_blank" : undefined
                    }
                    rel={
                      item.routeto.includes("https")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
