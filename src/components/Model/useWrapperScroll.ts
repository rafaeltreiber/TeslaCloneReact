import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
    const { wrapperRef } = useContext(ModelsContext)

    const scrollY = useMotionValue(0)
    const scrollYprogress = useMotionValue(0)

    useEffect(() => {
        const element = wrapperRef.current

        if (element) {
            const updateScrollValue = () => {                
                    const { scrollTop, scrollHeight, offsetHeight } = element
                    const fullScroll = scrollHeight - offsetHeight

                    scrollY.set(scrollTop)
                    scrollYprogress.set(scrollTop / fullScroll)
                
            }

            element.addEventListener('scroll', updateScrollValue)

            return () => element.removeEventListener('scroll', updateScrollValue)
        }
    }, [scrollY, scrollYprogress, wrapperRef])

    return { scrollY, scrollYprogress }    
}