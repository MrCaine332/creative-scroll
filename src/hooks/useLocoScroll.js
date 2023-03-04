import {useEffect} from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function useLocoScroll() {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            smoothMobile: true,
            resetNativeScroll: true,
            inertia: 0.25
        })

        if (scroll) {
            const observer = new ResizeObserver(() => scroll.update())
            observer.observe(document.querySelector("[data-scroll-container]"))
            setTimeout(() => {
                observer.disconnect()
            }, 1000)
        }

        return () => {
            if (scroll) {
                scroll.destroy();
            }
        }
    },[]);
}