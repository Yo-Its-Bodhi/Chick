import { useRef } from 'react';
import CountUpModule from 'react-countup';
import { motion, useInView } from 'framer-motion';

// Handle CJS default export interop — react-countup may resolve as { default: CountUp }
const CountUp = typeof CountUpModule === 'function' ? CountUpModule : CountUpModule.default;

export default function AnimatedCounter({ end, suffix = '', prefix = '', decimals = 0, duration = 2, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.span
      ref={ref}
      className={`font-[family-name:var(--font-mono)] ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {isInView ? (
        <CountUp
          start={0}
          end={end}
          duration={duration}
          separator=","
          decimals={decimals}
          prefix={prefix}
          suffix={suffix}
        />
      ) : (
        `${prefix}0${suffix}`
      )}
    </motion.span>
  );
}
