import React from 'react'
import styles from './header.module.css'

const Header = () => (
    <header className={styles.main_header}>
        <div className={styles.cta_section}>
            <h1 style={{ fontSize: 'font-size: 4em' }}><span style={{ color: "#18a0fb" }}>Oran</span><span style={{ color: "#49569a" }}>Dev </span><span style={{ color: "#fc7cad" }}>Solutions</span></h1>

            <h4 className={styles.cta_secondary_header}>
                meilleure qualité avec le meilleur prix
        </h4>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum
                sequi suscipit eum placeat ratione deleniti dolores, dolorum quo
                voluptatibus.
        </p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded"
            >
                Contact US!
        </button>
        </div>
        <img
            className={styles.cta_img}
            src="https://res.cloudinary.com/dxm0sdgpv/image/upload/v1592743116/cta-image_byff1p.png"
            alt="Oran Dev Solutions"
        />
    </header>
)

export default Header