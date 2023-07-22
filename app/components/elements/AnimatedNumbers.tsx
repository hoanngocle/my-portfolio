'use client';

import { useMotionValue, useSpring, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

function AnimatedNumbers({ value }: { value: number }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on('change', latest => {
            if (ref.current && latest.toFixed(0) <= value) {
                // @ts-ignore
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);
    return <span ref={ref}></span>;
}
export default AnimatedNumbers;
