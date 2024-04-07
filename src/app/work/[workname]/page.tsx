'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import yeKesiBimariHai from '@/assets/BrandingAds/yeKesiBimariHai.jpg'
import yeKyaHogya from '@/assets/BrandingAds/yeKyaHogya.jpg'
import CreateTheNextBigApp from '@/assets/ProductAds/CreateTheNextBigApp.jpg'
import DevopsEngineerSalary from '@/assets/ProductAds/DevopsEngineerSalary.jpg'
import FullStackDevelopment from '@/assets/ProductAds/FullStackDevelopment.jpg'
import threeNinety from '@/assets/ProductAds/threeNinety.jpg'
import Mario from '@/assets/GamingThemeAds/Mario.png'
import GamingNostalgia from '@/assets/GamingThemeAds/GamingNostalgia.png'
import DataAnalytics from '@/assets/MoreAds1/DataAnalytics.png'
import gfgCIP from '@/assets/MoreAds1/gfgCIP.png'
import gfgGate from '@/assets/MoreAds1/gfgGate.png'
import campusMantri from '@/assets/MoreAds2/campusMantri.png'
import gfgCarnival from '@/assets/MoreAds2/gfgCarnival.png'
import gfgIOS from '@/assets/MoreAds2/gfgIOS.png'
import gfgReview from '@/assets/GFGREVIEW/gfgReview.jpg'
import geekdigest from '@/assets/GFGdigest/geekdigest.png'
import gfgInsta from '@/assets/InstaFrenzy/gfgInsta.png'

import styles from '@/styles/SpecificWorkPage.module.css'
import { InstagramEmbed, YouTubeEmbed } from 'react-social-media-embed';
import { StaticImageData } from 'next/image'
import Link from 'next/link'

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
const Page = () => {

    const BrandingAds = [
        {
            title: 'Ye Kaisi Bimari Hai',
            image: yeKesiBimariHai,
            link: 'https://www.youtube.com/watch?v=zbBALFXGy4Y',
            itemtype: 'youtube'
        },
        {
            title: 'Ye Kya Hogya',
            image: yeKyaHogya,
            link: 'https://youtu.be/v41P3Y5Xol8?si=qybXtFHhM-3qNQ3i',
            itemtype: 'youtube'
        }
    ]
    const ProductAds = [
        {
            title: 'Create Your Own Apps Today',
            image: CreateTheNextBigApp,
            link: 'https://www.youtube.com/watch?v=LycNCWC3g18',
            itemtype: 'youtube'
        },
        {
            title: 'Ace your DevOps interview',
            image: DevopsEngineerSalary,
            link: 'https://www.youtube.com/watch?v=I-J28pjrTc8',
            itemtype: 'youtube'

        },
        {
            title: 'Full Stack Development',
            image: FullStackDevelopment,
            link: 'https://www.youtube.com/watch?v=cBfC9HLR9Qk',
            itemtype: 'youtube'

        },
        {
            title: 'Three 90 Challenge !!',
            image: threeNinety,
            link: 'https://www.youtube.com/watch?v=Vtxq-yHdKpA',
            itemtype: 'youtube'

        }
    ]
    const MarioAds = [
        {
            title: 'Job-a-thon-X-Geeks-for-Geeks',
            image: Mario,
            link: 'https://www.behance.net/embed/project/157355269?ilo0=1',
            itemtype: 'behance'
        }
    ]
    const GamingNostalgiaAds = [
        {
            title: 'Weekly-Interview-Series-X-Geeks-for-Geeks',
            image: GamingNostalgia,
            link: 'https://www.behance.net/embed/project/157354605?ilo0=1',
            itemtype: 'behance'

        }
    ]
    const MoreAds1 = [

        {
            title: 'GATE-Display-Ad',
            image: gfgGate,
            link: 'https://www.behance.net/embed/project/192629115?ilo0=1',
            itemtype: 'behance'

        },
        {
            title: 'Data-Analytics-Ad-Copy',
            image: DataAnalytics,
            link: 'https://www.behance.net/embed/project/192628809?ilo0=1',
            itemtype: 'behance'

        },
        {
            title: 'Geeks-for-Geeks-x-CIP',
            image: gfgCIP,
            link: 'https://www.behance.net/embed/project/157353337?ilo0=1',
            itemtype: 'behance'

        }
    ]
    const MoreAds2 = [

        {
            title: 'Campus-Mantri-x-Geeks-for-Geeks',
            image: campusMantri,
            link: 'https://www.behance.net/embed/project/158618351?ilo0=1',
            itemtype: 'behance'

        },
        {
            title: 'Geeks-summer-carnival',
            image: gfgCarnival,
            link: 'https://www.behance.net/embed/project/179646427?ilo0=1',
            itemtype: 'behance'

        },
        {
            title: 'GfG-iOS-app-launch-trailer',
            image: gfgIOS,
            link: 'https://www.behance.net/embed/project/159297555?ilo0=1',
            itemtype: 'behance'

        }
    ]
    const GfgDigest = [

        {
            title: 'Geeks For Geeks Digest',
            image: null,
            link: 'https://media.geeksforgeeks.org/geeks-digest/2022/2022-03_March+2022+Edition_72dd31b3382750d23c43b738b4529654.pdf',
            itemtype: 'geekdigest'
        }
    ]
    const GFGReview = [
        {
            title: 'GeeksforGeeks In a Review 2023',
            image: gfgReview,
            link: 'https://www.youtube.com/watch?v=q_kEa8oBo2A',
            itemtype: 'youtube'

        }
    ]

    const GFGInsta = [
        {
            title: 'Yeh bhi koi baat hui bhala ',
            image: null,
            link: 'https://www.instagram.com/reel/C0v7A1_rjzb/?igsh=OXo2enB6eWQ2cmFh',
            itemtype: 'instagram'
        },
        {
            title: 'Swipe to see how the cycle continues',
            image: null,
            link: 'https://www.instagram.com/p/C2es-kForV2/?igsh=MWxkaHlha3QzNDNyaw%3D%3D',
            itemtype: 'instagram'
        },
        {
            title: 'Itna sach bhi nhi bolna tha',
            image: null,
            link: 'https://www.instagram.com/reel/C3CRBk6r-TI/?igsh=Z3U5YnZ3YWt1c3Fh',
            itemtype: 'instagram'
        }
    ]

    const fullWorkArray: FULLWORK[] = [
        {
            heading: 'Branding ads I made',
            description: 'Captivating ads drive engagement for brands.',
            longdescription: 'Through meticulous design and strategic messaging, I crafted compelling branding ads that resonate with audiences. By blending creativity with market insights, these ads drive brand recognition, foster customer engagement, and amplify brand identity, leaving a lasting impression on viewers.',
            poster: yeKesiBimariHai,
            routeto: '/work/brandingads',
            data: BrandingAds
        },
        {
            heading: 'Product ads I made',
            description: 'Highlighting features, driving sales effectively.',
            longdescription: "I meticulously conceptualized and executed impactful product ads, harnessing persuasive visuals and compelling narratives to showcase each product's unique value proposition. These ads seamlessly blend creativity and strategic marketing, driving sales, and igniting consumer interest and desire.",
            poster: CreateTheNextBigApp,
            routeto: '/work/productads',
            data: ProductAds
        },
        {
            heading: 'Crafting Ads that Break the Mold',
            description: 'Mario-themed ad captivates geek audience, breaking monotony.',
            longdescription: "Transitioning from Mario player to creator, I spearheaded an ad campaign that resonated deeply with our geek-centric brand identity. Breaking through advertising monotony, this attention-grabbing ad not only intrigued viewers but also injected a cool factor into our job-a-thon, garnering significant attention and engagement.",
            poster: Mario,
            routeto: '/work/marioads',
            data: MarioAds
        },
        {
            heading: 'The Gaming Nostalgia Never ends',
            description: 'Rediscover timeless gaming memories, relive the magic endlessly.',
            longdescription: "Embark on a journey through nostalgia as you rediscover timeless gaming memories. Dive into cherished classics and relive the magic endlessly.",
            poster: GamingNostalgia,
            routeto: '/work/gamingads',
            data: GamingNostalgiaAds
        },
        {
            heading: 'Success Unleashed: Display Campaign at GeeksforGeeks',
            description: 'High CTR, low bounce rate display campaign at GeeksforGeeks.',
            longdescription: "Our display campaign at GeeksforGeeks achieved remarkable success with a high click-through rate and low bounce rate. Engage your audience effectively with our proven strategies.",
            poster: gfgGate,
            routeto: '/work/gfgdisplayads',
            data: MoreAds1
        },
        {
            heading: 'Motion Graphic Ads',
            description: 'Pushing possibilities in commercials with motion graphics.',
            longdescription: "Explore the possibilities of motion graphics in commercials as we push boundaries and captivate audiences with dynamic visuals and engaging storytelling.",
            poster: campusMantri,
            routeto: '/work/motiongraphicads',
            data: MoreAds2
        },
        {
            heading: 'Geeks For Geeks Review',
            description: 'Have a look at How we changed the world in 2023, and how we plan to revolutionize your coding journey in 2024!',
            longdescription: "Have a look at How we changed the world in 2023, and how we plan to revolutionize your coding journey in 2024!",
            poster: gfgReview,
            routeto: '/work/geekreview',
            data: GFGReview
        },
        {
            heading: 'Geeks For Geeks Digest',
            description: 'I conceptualized and solely edited the 1st edition of Geeks Digest, now its chief strategist.',
            longdescription: "As the chief strategist, I conceptualized and solely edited the first edition of Geeks Digest, shaping it into a premier publication for tech enthusiasts worldwide.",
            poster: geekdigest,
            routeto: '/work/geekdigest',
            data: GfgDigest
        },
        {
            heading: 'Insta Frenzy',
            description: " These are some of the best running Instagram posts ideated by me. The nature of these posts vary from promotional, creative to purely engagement centric.",
            longdescription: " These are some of the best running Instagram posts ideated by me. The nature of these posts vary from promotional, creative to purely engagement centric.",
            poster: gfgInsta,
            routeto: '/work/geekinstagram',
            data: GFGInsta
        }
    ];

    const [workDetails, setWorkDetails] = useState<FULLWORK | null>(null)
    const pathname = usePathname()
    useEffect(() => {
        const index = fullWorkArray.findIndex(item => item.routeto === pathname);
        if (index !== -1) {
            setWorkDetails(fullWorkArray[index]);
        }
        console.log(fullWorkArray[index])
    }, []);



    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    return (
        <div className={styles.workdetailspage}>

            <div className={styles.otherworkbar}>
                {
                    fullWorkArray.map((item, index) => (
                        <Link key={index}
                            href={item.routeto}

                            className={item.routeto == pathname ? styles.otherworkbaritemActive : styles.otherworkbaritem}>
                            {item.heading}
                        </Link>
                    ))
                }
            </div>
            <div className={styles.textbox}>
                <h1>{workDetails?.heading}</h1>
                <p>{workDetails?.longdescription}</p>

            </div>

            <div className={styles.embededItems}>
                {
                    workDetails?.data.map((item, index) => (
                        <div key={index} className={styles.embedItem}>
                            <div style={{
                                aspectRatio: 16 / 9
                            }}>
                                {item.itemtype == 'youtube' &&
                                    <YouTubeEmbed url={item.link}
                                        style={{
                                            width: '100%',
                                            aspectRatio: 16 / 9,
                                            objectFit: 'cover'
                                        }}
                                    />
                                }
                            </div>
                            {item.itemtype == 'instagram' &&
                                <InstagramEmbed url={item.link}
                                    style={{
                                        width: '100%',
                                        aspectRatio: 9 / 16,
                                        objectFit: 'cover'
                                    }}
                                />
                            }
                            {
                                item.itemtype == 'behance' &&
                                <div style={{
                                    aspectRatio: 1
                                }}>

                                    <iframe
                                        src={item.link}
                                        height="100%"
                                        width="100%"


                                        allowFullScreen
                                        frameBorder="0"
                                        allow="clipboard-write"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        loading="lazy"
                                    ></iframe>

                                </div>
                            }
                        </div>
                    ))
                }
            </div>

            {
                workDetails?.data[0].itemtype == 'geekdigest' &&

                <iframe
                    src={workDetails?.data[0].link}

                    title="PDF Viewer" width="100%" height="100%" style={{
                        aspectRatio: 9 / 16
                    }}></iframe>
            }

            <div className={styles.textbox}>
                <p>-- cool stuff ends here --</p>
            </div>
        </div>
    )
}

export default Page
