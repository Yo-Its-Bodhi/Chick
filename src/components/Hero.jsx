import { motion } from 'framer-motion';
import ChickenBackground from './ParticleBackground';
import GlowButton from './ui/GlowButton';
import useTokenData from '../context/TokenDataContext';

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.04, duration: 0.4, ease: 'easeOut' },
  }),
};

const TITLE = 'CRAZY CHICKEN';

export default function Hero() {
  const { data } = useTokenData();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient mesh bg — deep orange center glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(200,80,0,0.14)_0%,_rgba(180,60,0,0.06)_30%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.06)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,212,255,0.04)_0%,_transparent_50%)]" />
      </div>

      <ChickenBackground />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Mascot placeholder */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="mb-6 animate-float"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FF8C00]/20 border-2 border-[#FFD700]/30 flex items-center justify-center text-6xl md:text-7xl shadow-[0_0_40px_rgba(255,215,0,0.2)]">
            🐔
          </div>
        </motion.div>

        {/* Title — letter by letter */}
        <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-8xl font-bold mb-4 leading-none">
          {TITLE.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block gradient-text-yellow"
              style={{ marginRight: char === ' ' ? '0.3em' : '0' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Ticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mb-6"
        >
          <span className="font-[family-name:var(--font-mono)] text-3xl md:text-5xl font-bold text-[var(--color-accent-yellow)] animate-pulse-glow">
            $CHICK
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-4 max-w-2xl"
        >
          The Craziest Deflationary Meme Token on Shido Network
        </motion.p>

        {/* Live price mini-ticker */}
        {data && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="glass px-4 py-2 rounded-full mb-8 flex items-center gap-3 text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-green)] animate-pulse-glow" />
            <span className="font-[family-name:var(--font-mono)] text-[var(--color-accent-yellow)]">{data.price}</span>
            <span className={data.change24hRaw >= 0 ? 'text-[var(--color-accent-green)]' : 'text-[var(--color-accent-red)]'}>
              {data.change24h}
            </span>
          </motion.div>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <GlowButton href="https://t.me/+AgMyEfk-kcRhZDY0" color="blue">
            Join The Coop 🥚
          </GlowButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 animate-bounce-down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
          <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
