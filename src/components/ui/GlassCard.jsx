import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', glow = '', hover = true, ...props }) {
  return (
    <motion.div
      className={`glass ${hover ? 'glass-hover' : ''} ${glow} p-6 transition-all duration-300 ${className}`}
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
