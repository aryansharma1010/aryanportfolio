"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css'
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
const Navbar: React.FC = () => {
    const pathname = usePathname()
    console.log(pathname)
    const [showNavItems, setShowNavItems] = useState(false)

    useEffect(()=>{
        setShowNavItems(false)
    },[pathname])
    const toggleMenu = () => {
        setShowNavItems(!showNavItems)
    }
    return (
        <nav className={styles.navbar}>

            <ul className={styles.navallitemsweb}>
                <li>
                    <Link href="/">
                        <span className={pathname === '/' ? styles.active : ''}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/work">
                        <span className={pathname.includes('/work') ? styles.active : ''}>Projects</span>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <span className={pathname === '/about' ? styles.active : ''}>About</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className={pathname === '/contact' ? styles.active : ''}>Contact</span>
                    </Link>
                </li>
            </ul>

            <div className={styles.mobile}>
                <div className={styles.navbarToggle} onClick={toggleMenu}>
                    <FaBars />
                </div>
                {
                    showNavItems &&
                    <ul className={styles.navallitemsmobile}>
                        <li>
                            <Link href="/">
                                <span className={pathname === '/' ? styles.active : ''}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/work">
                                <span className={pathname === '/work' ? styles.active : ''}>Work</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className={pathname === '/about' ? styles.active : ''}>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className={pathname === '/contact' ? styles.active : ''}>Contact</span>
                            </Link>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    );
};

export default Navbar;
