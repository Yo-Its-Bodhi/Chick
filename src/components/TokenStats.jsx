import SectionReveal from './ui/SectionReveal';
import GlassCard from './ui/GlassCard';
import AnimatedCounter from './ui/AnimatedCounter';

const STATS = [
  { label: 'Max Supply', value: 10, suffix: 'B', icon: '🐣', glow: 'glow-yellow', color: 'text-[var(--color-accent-yellow)]' },
  { label: 'Burned', value: 1.28, suffix: 'B+', icon: '🔥', glow: 'glow-pink', color: 'text-[var(--color-accent-pink)]' },
  { label: 'Staked', value: 2.25, suffix: 'B+', icon: '💎', glow: 'glow-blue', color: 'text-[var(--color-accent-blue)]' },
  { label: 'Locked in Vault', value: 1.5, suffix: 'B', icon: '🔒', glow: 'glow-purple', color: 'text-[var(--color-accent-purple)]' },
  { label: 'Circulating', value: 4.8, suffix: 'B', prefix: '~', icon: '🌊', glow: 'glow-green', color: 'text-[var(--color-accent-green)]' },
  { label: 'Liquidity Pool', value: 16, suffix: 'M WSHIDO', icon: '💧', glow: 'glow-blue', color: 'text-[var(--color-accent-blue)]' },
];

export default function TokenStats() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,20,147,0.04)_0%,_transparent_60%)]" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <SectionReveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            The Numbers Don't Lie 📊
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-10">
            $CHICK supply breakdown — real numbers, real burns, real commitment
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.08}>
              <GlassCard glow={stat.glow} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 2 : 0}
                  className={`text-2xl md:text-4xl font-bold block mb-1 ${stat.color}`}
                />
                <span className="text-sm text-[var(--color-text-secondary)]">{stat.label}</span>
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
