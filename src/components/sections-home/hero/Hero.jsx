import React from 'react';
import styles from './Hero.module.scss'
import heroImg from '../../../resources/img/hero.png'
import {useInView} from "@react-spring/web";
import {animated} from "@react-spring/web";


const Hero = () => {

    const [ ref, springs ] = useInView(
        () => ({
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        }),
        {
            threshold: 0.15,
        }
    )

    return (
        <animated.div className={styles.hero} ref={ref} style={{...springs}}>
            <img className={styles.heroImage} src={heroImg} alt=""
                 data-scroll
                 data-scroll-speed="4"
            />
            <div className={styles.heroTitle}
                 data-scroll
                 data-scroll-speed="-1"
            >
                <h1>creative scroll</h1>
            </div>
        </animated.div>
    );
};

export default Hero;