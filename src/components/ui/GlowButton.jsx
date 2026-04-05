import { motion } from 'framer-motion';

export default function GlowButton({ children, href, color = 'green', className = '', onClick, ...props }) {
  const colors = {
    green: 'from-[#00FF88] to-[#00cc6a] shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)]',
    yellow: 'from-[#FFD700] to-[#e6c200] shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]',
    blue: 'from-[#00D4FF] to-[#0099cc] shadow-[0_0_20px_rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]',
    orange: 'from-[#FF8C00] to-[#cc7000] shadow-[0_0_20px_rgba(255,140,0,0.3)] hover:shadow-[0_0_30px_rgba(255,140,0,0.5)]',
    purple: 'from-[#A855F7] to-[#7c3aed] shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]',
  };

  const base = `inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-[family-name:var(--font-heading)] font-bold text-black bg-gradient-to-r ${colors[color]} transition-all duration-300 cursor-pointer text-base`;

  const Comp = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      <Comp
        href={href}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        className={`${base} ${className}`}
        {...props}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
