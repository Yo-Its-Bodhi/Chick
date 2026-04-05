import SectionReveal from './ui/SectionReveal';
import GlassCard from './ui/GlassCard';
import GradientText from './ui/GradientText';

const HIGHLIGHTS = [
  { emoji: '🔥', text: 'Deflationary by design — active burn mechanism reducing supply' },
  { emoji: '🐔', text: 'Community-first, always — driven by the coop, not the suits' },
  { emoji: '🔒', text: 'Liquidity locked & transparent — no rug, just chicken' },
  { emoji: '💎', text: 'Staking available on Shido DEX — earn while you hold' },
  { emoji: '🥚', text: 'Dual-token ecosystem — $CHICK + $EGG = real utility' },
];

const ROADMAP = [
  { q: 'Q1', title: 'Transparency', items: ['Public supply & burn tracker', 'Fixed burn schedule', 'Community rewards finalized'] },
  { q: 'Q2', title: 'Burns & Rewards', items: ['Quarterly Burn Event #1', 'Community Reward Pool', 'Post-burn transparency report'] },
  { q: 'Q3', title: 'Chicken Run', items: ['Buy Competition Season 1', 'Rewards paid in CHICK', 'Partial burn from activity'] },
  { q: 'Q4', title: 'Optimization', items: ['Quarterly Burn Event #2', 'Season 2 + reward optimization', '2027 roadmap draft'] },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(0,212,255,0.04)_0%,_transparent_50%)]" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionReveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-center mb-4">
            WTF is <GradientText gradient="yellow">Crazy Chicken</GradientText>? 🐔
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-2xl mx-auto text-lg">
            We're a meme token that actually does shit. Community-driven, burn-powered, and absolutely unhinged.
            Built on Shido Network. Not taking itself too seriously — but the numbers are dead serious.
          </p>
        </SectionReveal>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 max-w-3xl mx-auto">
          {HIGHLIGHTS.map((h, i) => (
            <SectionReveal key={i} delay={i * 0.08}>
              <div className="glass p-4 rounded-xl flex items-start gap-3 glass-hover">
                <span className="text-2xl flex-shrink-0">{h.emoji}</span>
                <p className="text-sm text-[var(--color-text-secondary)]">{h.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Roadmap 2026 */}
        <SectionReveal>
          <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-center mb-10 text-white">
            2026 Roadmap — <span className="gradient-text-green">Execution Only</span>
          </h3>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROADMAP.map((item, i) => (
            <SectionReveal key={item.q} delay={i * 0.1}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-[family-name:var(--font-mono)] text-lg font-bold text-[var(--color-accent-yellow)]">{item.q}</span>
                  <span className="text-sm font-bold text-white">{item.title}</span>
                </div>
                <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
                  {item.items.map((t, j) => (
                    <li key={j}>• {t}</li>
                  ))}
                </ul>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
