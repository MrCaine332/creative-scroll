import React from 'react';
import "./PortfolioItem.module.scss"
import {useInView, animated} from "@react-spring/web";

const PortfolioItem = ({ children, moveDirection }) => {
    const [ ref, springs ] = useInView(
        () => ({
            from: {
                x: moveDirection === "left" ? 100 : -100
            },
            to: {
                x: 0
            },
        }),
        {
            threshold: 0.5,
            once: true
        }
    )

    return (
        <animated.div ref={ref} style={{...springs}}>
            { children }
        </animated.div>
    );
};

export default PortfolioItem;