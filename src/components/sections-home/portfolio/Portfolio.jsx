import React from 'react';
import styles from './Portfolio.module.scss'
import imgWork1 from '../../../resources/img/work/1.jpg'
import imgWork2 from '../../../resources/img/work/2.jpg'
import imgWork3 from '../../../resources/img/work/3.jpg'
import imgWork4 from '../../../resources/img/work/4.jpg'
import imgWork5 from '../../../resources/img/work/5.jpg'
import imgWork6 from '../../../resources/img/work/6.jpg'
import PortfolioItem from "./portfolio-item/PortfolioItem";

const Portfolio = () => {
    return (
        <div className={styles.portfolio}>
            <div className={styles.gallery}>
                <div className={styles.galleryLeft} data-scroll data-scroll-speed="3">
                    <PortfolioItem moveDirection={"right"}>
                        <img className={styles.galleryItem} src={imgWork1} alt=""/>
                    </PortfolioItem>
                    <PortfolioItem moveDirection={"right"}>
                        <img className={styles.galleryItem} src={imgWork2} alt=""/>
                    </PortfolioItem>
                    <PortfolioItem moveDirection={"right"}>
                        <div className={styles.galleryText + ' ' + styles.galleryItem}>
                            <h2>Creative floating scroll with amazing parallax effect</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Alias itaque qui reprehenderit sit unde vel voluptatibus?</p>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem moveDirection={"right"}>
                        <img className={styles.galleryItem} src={imgWork6} alt=""/>
                    </PortfolioItem>
                </div>
                <div className={styles.galleryRight} data-scroll data-scroll-speed="1">
                    <PortfolioItem moveDirection={"left"}>
                        <div className={styles.galleryText + ' ' + styles.galleryItem}>
                            <h2>Creative floating scroll with amazing parallax effect</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Alias itaque qui reprehenderit sit unde vel voluptatibus?</p>
                        </div>
                    </PortfolioItem>
                    <PortfolioItem moveDirection={"left"}>
                        <img className={styles.galleryItem} src={imgWork3} alt=""/>
                    </PortfolioItem>
                    <PortfolioItem moveDirection={"left"}>
                        <img className={styles.galleryItem} src={imgWork4} alt=""/>
                    </PortfolioItem>
                    <PortfolioItem moveDirection={"left"}>
                        <img className={styles.galleryItem} src={imgWork5} alt=""/>
                    </PortfolioItem>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;