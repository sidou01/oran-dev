import React from 'react'
import styles from './main-nav.module.css'
const MainNav = () => (
    <div className={styles.top_header}>
        <img
            className={styles.top_header_img}
            src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1592743112/left-top_muyncf.png"
            alt="Oran Dev Solutions"
        />
        <nav>
            <ul class={styles.ul}>
                <a href="" className={styles.nav_link}>
                    <li>Services</li>
                </a>
                <a href="" className={styles.nav_link}>
                    <li>Our Team</li>
                </a>
                <a href="" className={styles.nav_link}>
                    <li>Sponsoring</li>
                </a>
                <a href="" className={styles.nav_link}>
                    <li>Contact Us</li>
                </a>
            </ul>
        </nav>
    </div>
)

export default MainNav