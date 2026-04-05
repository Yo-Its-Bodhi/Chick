import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import GlowButton from './ui/GlowButton';
import SectionReveal from './ui/SectionReveal';

const SWAPS = [
  {
    name: 'Shido DEX',
    url: 'https://pool.shido.io/swap/',
    color: 'yellow',
    glow: 'glow-yellow',
    border: 'hover:border-[var(--color-accent-yellow)]/40',
    emoji: '⚡',
    desc: 'The native Shido DEX — swap directly on the home chain',
  },
  {
    name: 'BubbleSwap',
    url: 'https://app.bubbleswap.io',
    color: 'blue',
    glow: 'glow-blue',
    border: 'hover:border-[var(--color-accent-blue)]/40',
    emoji: '🫧',
    desc: 'Smooth, bubbly swaps on Shido Network',
  },
  {
    name: 'BodhiX Swap',
    url: 'https://swap.bodhix.io',
    color: 'green',
    glow: 'glow-green',
    border: 'hover:border-[var(--color-accent-green)]/40',
    emoji: '🧘',
    desc: 'Swap with enlightenment on BodhiX',
  },
];

export default function SwapLinks() {
  return (
    <section id="swap" className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <SectionReveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Get Your $CHICK 🐔
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-10 max-w-lg mx-auto">
            Swap on your favourite DEX. Same chicken, different coop.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SWAPS.map((swap, i) => (
            <SectionReveal key={swap.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -3 }}
                style={{ perspective: 800 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <GlassCard glow={swap.glow} className={`text-center ${swap.border} transition-all duration-300`}>
                  <div className="text-5xl mb-4">{swap.emoji}</div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white mb-2">{swap.name}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-6">{swap.desc}</p>
                  <GlowButton href={swap.url} color={swap.color} className="w-full justify-center">
                    Swap on {swap.name}
                  </GlowButton>
                </GlassCard>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
