import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './ui/GlassCard';
import SectionReveal from './ui/SectionReveal';
import GradientText from './ui/GradientText';

const FLYWHEEL_STEPS = [
  { label: 'Buy / Hold CHICK', icon: '🐔', color: 'var(--color-accent-yellow)' },
  { label: 'Burn CHICK', icon: '🔥', color: 'var(--color-accent-pink)' },
  { label: 'Earn EGG', icon: '🥚', color: 'var(--color-accent-orange)' },
  { label: 'CHICK Supply ↓', icon: '📉', color: 'var(--color-accent-pink)' },
  { label: 'EGG Demand ↑', icon: '📈', color: 'var(--color-accent-green)' },
  { label: 'Value Grows', icon: '💎', color: 'var(--color-accent-purple)' },
];

const UTILITY = [
  { icon: '🔥', title: 'Burn Mechanics', desc: 'Earn more, unlock rewards through strategic burns', color: 'glow-pink' },
  { icon: '🏆', title: 'Competitions', desc: 'Leaderboards and Chicken Run buy competitions', color: 'glow-yellow' },
  { icon: '🎨', title: 'NFT Access', desc: 'Mint exclusive Crazy Chicken NFTs with EGG', color: 'glow-purple' },
  { icon: '💎', title: 'Status Tiers', desc: 'Diamond & Platinum ranks for elite holders', color: 'glow-blue' },
  { icon: '🎁', title: 'Exclusive Drops', desc: 'First access to future rewards and airdrops', color: 'glow-orange' },
  { icon: '⚡', title: 'Future Rewards', desc: 'The ecosystem grows — and so do your benefits', color: 'glow-green' },
];

export default function EggSection() {
  return (
    <section id="egg" className="relative overflow-hidden">
      {/* BG shift to warm tones */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,140,0,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,215,0,0.04)_0%,_transparent_50%)]" />

      <div className="section-padding max-w-[1200px] mx-auto relative z-10">
        {/* 6a: EGG Hero */}
        <EggHero />

        {/* 6b: Thesis — CHICK vs EGG */}
        <ThesisComparison />

        {/* 6c: Flywheel */}
        <Flywheel />

        {/* 6d: Utility Grid */}
        <UtilityGrid />

        {/* 6e: Supply/Scarcity */}
        <SupplyStats />

        {/* 6f: Game Design / Psychological Edge */}
        <GameDesign />
      </div>
    </section>
  );
}

function EggHero() {
  return (
    <SectionReveal className="text-center mb-20">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="inline-block mb-6"
      >
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#FF8C00]/20 to-[#FFD700]/20 border-2 border-[#FF8C00]/30 flex items-center justify-center text-5xl md:text-6xl shadow-[0_0_60px_rgba(255,140,0,0.2)] animate-float">
          🥚
        </div>
      </motion.div>

      <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
        <GradientText gradient="orange">Meet $EGG</GradientText>
      </h2>
      <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-4">
        The utility layer that powers the Chick universe
      </p>
      <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl italic text-white/80">
        "Chick is what people buy. <GradientText gradient="orange">Egg is why they stay.</GradientText>"
      </p>
    </SectionReveal>
  );
}

function ThesisComparison() {
  return (
    <div className="mb-20">
      <SectionReveal>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Two Tokens. One System.
        </h3>
      </SectionReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Connecting line desktop */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-[#FFD700] to-[#FF8C00] flex items-center justify-center z-20 shadow-[0_0_30px_rgba(255,140,0,0.4)]">
          <span className="absolute inset-0 flex items-center justify-center text-2xl">🔗</span>
        </div>

        <SectionReveal delay={0.1}>
          <GlassCard glow="glow-yellow" className="text-center border-[var(--color-accent-yellow)]/20 hover:border-[var(--color-accent-yellow)]/40">
            <div className="text-4xl mb-3">🐔</div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl font-bold gradient-text-yellow mb-3">$CHICK</h4>
            <p className="text-[var(--color-text-secondary)] text-lg">Supply, Liquidity, Meme Reach</p>
            <div className="mt-4 text-sm text-[var(--color-text-secondary)] space-y-1">
              <p>✦ The base asset everyone knows</p>
              <p>✦ Deflationary by design</p>
              <p>✦ Tradeable on all Shido DEXs</p>
            </div>
          </GlassCard>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <GlassCard glow="glow-orange" className="text-center border-[var(--color-accent-orange)]/20 hover:border-[var(--color-accent-orange)]/40">
            <div className="text-4xl mb-3">🥚</div>
            <h4 className="font-[family-name:var(--font-heading)] text-xl font-bold gradient-text-orange mb-3">$EGG</h4>
            <p className="text-[var(--color-text-secondary)] text-lg">Access, Rewards, Ecosystem Power</p>
            <div className="mt-4 text-sm text-[var(--color-text-secondary)] space-y-1">
              <p>✦ Earned, not given</p>
              <p>✦ Burns CHICK to create EGG</p>
              <p>✦ Unlocks the entire ecosystem</p>
            </div>
          </GlassCard>
        </SectionReveal>
      </div>

      {/* Before / After */}
      <SectionReveal delay={0.3}>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass p-5 rounded-xl border-[var(--color-accent-red)]/10">
            <p className="text-sm font-bold text-[var(--color-accent-red)] mb-2">❌ Without Egg</p>
            <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
              <li>• Chick is purely speculative</li>
              <li>• No strong reason to hold long-term</li>
              <li>• No internal economy</li>
            </ul>
          </div>
          <div className="glass p-5 rounded-xl border-[var(--color-accent-green)]/10">
            <p className="text-sm font-bold text-[var(--color-accent-green)] mb-2">✅ With Egg</p>
            <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
              <li>• Users must engage to earn value</li>
              <li>• Chick becomes deflationary</li>
              <li>• A real ecosystem is formed</li>
            </ul>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}

function Flywheel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div className="mb-20" ref={ref}>
      <SectionReveal>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-center mb-4 text-white">
          The Flywheel ♻️
        </h3>
        <p className="text-[var(--color-text-secondary)] text-center mb-10">Self-reinforcing growth — every action strengthens the system</p>
      </SectionReveal>

      {/* Flywheel — horizontal chain on mobile, circle on desktop */}

      {/* MOBILE: horizontal scroll chain */}
      <div className="md:hidden flex flex-col items-center gap-3 px-2">
        {FLYWHEEL_STEPS.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.12, type: 'spring', stiffness: 200, damping: 18 }}
          >
            <div
              className="glass rounded-2xl px-5 py-3 flex items-center gap-3 min-w-[200px]"
              style={{ boxShadow: `0 0 16px ${step.color}22` }}
            >
              <span className="text-2xl">{step.icon}</span>
              <span className="text-sm font-bold text-white/90">{step.label}</span>
            </div>
            {i < FLYWHEEL_STEPS.length - 1 && (
              <div className="flex justify-center text-[var(--color-accent-orange)] text-xl my-1">↓</div>
            )}
          </motion.div>
        ))}
        {/* Loop arrow */}
        <div className="text-[var(--color-accent-green)] text-sm flex items-center gap-1 mt-1">
          <span>↩</span><span className="text-[var(--color-text-secondary)] text-xs">cycle repeats</span>
        </div>
      </div>

      {/* DESKTOP: proper circular layout */}
      <div className="hidden md:block relative mx-auto" style={{ width: '560px', height: '560px' }}>
        {/* Center label */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="glass w-36 h-36 rounded-full flex items-center justify-center text-center p-4 glow-orange">
            <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-white leading-tight">
              Self<br />Reinforcing<br />Growth
            </span>
          </div>
        </div>

        {/* Rotating dashed ring */}
        <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-15" viewBox="0 0 560 560">
          <circle cx="280" cy="280" r="210" fill="none" stroke="url(#fw-grad)" strokeWidth="2" strokeDasharray="10 14" />
          <defs>
            <linearGradient id="fw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8C00" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#00FF88" />
            </linearGradient>
          </defs>
        </svg>

        {/* Steps around the circle */}
        {FLYWHEEL_STEPS.map((step, i) => {
          const angle = (i / FLYWHEEL_STEPS.length) * 2 * Math.PI - Math.PI / 2;
          const r = 210; // px from center
          const nodeSize = 96; // w-24 = 96px
          const cx = 280 + r * Math.cos(angle) - nodeSize / 2;
          const cy = 280 + r * Math.sin(angle) - nodeSize / 2;

          return (
            <motion.div
              key={step.label}
              className="absolute z-20"
              style={{
                left: `${cx}px`,
                top: `${cy}px`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div
                className="glass w-24 h-24 rounded-full flex flex-col items-center justify-center text-center cursor-default transition-transform duration-300 hover:scale-110"
                style={{ boxShadow: `0 0 24px ${step.color}33, 0 0 48px ${step.color}15` }}
              >
                <span className="text-2xl">{step.icon}</span>
                <span className="text-[10px] font-bold text-white/80 leading-tight mt-1">{step.label}</span>
              </div>
            </motion.div>
          );
        })}

        {/* Arrow arcs between steps */}
        <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none" viewBox="0 0 560 560">
          {FLYWHEEL_STEPS.map((_, i) => {
            const a1 = (i / FLYWHEEL_STEPS.length) * 2 * Math.PI - Math.PI / 2;
            const a2 = ((i + 1) / FLYWHEEL_STEPS.length) * 2 * Math.PI - Math.PI / 2;
            const mid = (a1 + a2) / 2;
            const arrowR = 210;
            const ax = 280 + arrowR * Math.cos(mid);
            const ay = 280 + arrowR * Math.sin(mid);
            const rot = (mid * 180) / Math.PI + 90;
            return (
              <motion.text
                key={i}
                x={ax}
                y={ay}
                fill="white"
                fontSize="18"
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${rot}, ${ax}, ${ay})`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.35 } : {}}
                transition={{ delay: 0.6 + i * 0.15 }}
              >
                ➤
              </motion.text>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

function UtilityGrid() {
  return (
    <div className="mb-20">
      <SectionReveal>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-center mb-4 text-white">
          What EGG Unlocks 🗝️
        </h3>
        <p className="text-[var(--color-text-secondary)] text-center mb-10">
          EGG = Access + Status + Opportunity
        </p>
      </SectionReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {UTILITY.map((item, i) => (
          <SectionReveal key={item.title} delay={i * 0.08}>
            <GlassCard glow={item.color} className="text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-[family-name:var(--font-heading)] font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-[var(--color-text-secondary)]">{item.desc}</p>
            </GlassCard>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}

function SupplyStats() {
  return (
    <div className="mb-20">
      <SectionReveal>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-center mb-10 text-white">
          Scarcity by Design 🔒
        </h3>
      </SectionReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <SectionReveal delay={0.1}>
          <GlassCard glow="glow-orange" className="text-center">
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">Total Supply</p>
            <p className="font-[family-name:var(--font-mono)] text-3xl md:text-4xl font-bold gradient-text-orange">100,000</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">EGG — ever.</p>
          </GlassCard>
        </SectionReveal>
        <SectionReveal delay={0.2}>
          <GlassCard glow="glow-yellow" className="text-center">
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">Airdrop</p>
            <p className="font-[family-name:var(--font-mono)] text-3xl md:text-4xl font-bold gradient-text-yellow">5%</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">5,000 EGG — vested to CHICK holders</p>
          </GlassCard>
        </SectionReveal>
        <SectionReveal delay={0.3}>
          <GlassCard glow="glow-pink" className="text-center">
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">Distribution</p>
            <p className="font-[family-name:var(--font-mono)] text-2xl font-bold gradient-text-pink">Burn-to-Earn</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Burn CHICK → Receive EGG</p>
          </GlassCard>
        </SectionReveal>
        <SectionReveal delay={0.4}>
          <GlassCard glow="glow-green" className="text-center">
            <p className="text-sm text-[var(--color-text-secondary)] mb-1">Liquidity</p>
            <p className="font-[family-name:var(--font-mono)] text-2xl font-bold gradient-text-green">Demand First</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-1">Pool launches AFTER demand exists</p>
          </GlassCard>
        </SectionReveal>
      </div>

      {/* Tokenomics teaser */}
      <SectionReveal delay={0.5}>
        <div className="mt-8 text-center">
          <span className="inline-block glass px-6 py-3 rounded-full text-sm text-[var(--color-accent-orange)] border border-[var(--color-accent-orange)]/20 animate-pulse-glow">
            🥚 Full Tokenomics Coming Soon
          </span>
        </div>
      </SectionReveal>
    </div>
  );
}

function GameDesign() {
  return (
    <SectionReveal className="text-center">
      <div className="glass p-8 md:p-12 rounded-2xl glow-purple max-w-3xl mx-auto">
        <p className="text-sm text-[var(--color-accent-purple)] uppercase tracking-widest mb-4 font-bold">Not just tokenomics</p>
        <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl font-bold text-white mb-6">
          This is <GradientText gradient="purple">Game Design</GradientText>
        </h3>

        {/* Progression */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 flex-wrap">
          {['Holder', 'Burner', 'Elite'].map((stage, i) => (
            <div key={stage} className="flex items-center gap-2 md:gap-4">
              <div className="glass px-4 py-2 rounded-lg text-center">
                <p className="text-xs text-[var(--color-text-secondary)]">Stage {i + 1}</p>
                <p className="font-[family-name:var(--font-heading)] font-bold text-white">{stage}</p>
              </div>
              {i < 2 && <span className="text-[var(--color-accent-orange)] text-xl">→</span>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { label: 'Exclusivity', val: '"I\'m Egg Diamond"' },
            { label: 'Scarcity', val: 'Only 100K' },
            { label: 'Progression', val: 'Holder → Elite' },
            { label: 'FOMO', val: 'Limited Drops' },
          ].map(item => (
            <div key={item.label} className="glass p-3 rounded-lg">
              <p className="text-xs text-[var(--color-accent-purple)] font-bold">{item.label}</p>
              <p className="text-sm text-white mt-1">{item.val}</p>
            </div>
          ))}
        </div>

        <p className="text-lg text-white/80 font-[family-name:var(--font-heading)]">
          Most projects launch and <em>hope</em> for demand.<br />
          <span className="gradient-text-orange font-bold">We engineer demand before price discovery.</span>
        </p>
      </div>
    </SectionReveal>
  );
}
