import { motion } from 'framer-motion';
import GlassCard from './ui/GlassCard';
import ShimmerLoader from './ui/ShimmerLoader';
import SectionReveal from './ui/SectionReveal';
import useTokenData from '../context/TokenDataContext';

const CARDS = [
  { key: 'price', label: 'Price', icon: '💰', glow: 'glow-yellow', colorClass: 'text-[var(--color-accent-yellow)]' },
  { key: 'change24h', label: '24h Change', icon: '📈', glow: '', colorClass: '', isDynamic: true },
  { key: 'volume24h', label: '24h Volume', icon: '📊', glow: 'glow-blue', colorClass: 'text-[var(--color-accent-blue)]' },
  { key: 'fdv', label: 'FDV', icon: '🏦', glow: 'glow-yellow', colorClass: 'text-[var(--color-accent-yellow)]' },
  { key: 'buySell', label: 'Buys / Sells (24h)', icon: '⚡', glow: 'glow-green', colorClass: '' },
  { key: 'liquidity', label: 'Pool Liquidity', icon: '💧', glow: 'glow-blue', colorClass: 'text-[var(--color-accent-blue)]' },
];

export default function KpiDashboard() {
  const { data, loading, error } = useTokenData();

  return (
    <section id="stats" className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="w-3 h-3 rounded-full bg-[var(--color-accent-green)] animate-pulse-glow" />
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white">
              Market Pulse
            </h2>
            <span className="text-xs text-[var(--color-accent-green)] font-mono uppercase tracking-wider">Live</span>
          </div>
        </SectionReveal>

        {error && (
          <p className="text-[var(--color-accent-red)] text-sm mb-4">Failed to load data. Retrying...</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CARDS.map((card, i) => (
            <SectionReveal key={card.key} delay={i * 0.08}>
              <GlassCard glow={card.glow} className="min-h-[140px] flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{card.icon}</span>
                  <span className="text-sm text-[var(--color-text-secondary)]">{card.label}</span>
                </div>
                {loading ? (
                  <ShimmerLoader />
                ) : (
                  <KpiValue card={card} data={data} />
                )}
              </GlassCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function KpiValue({ card, data }) {
  if (!data) return <span className="text-[var(--color-text-secondary)]">—</span>;

  if (card.key === 'change24h') {
    const positive = data.change24hRaw >= 0;
    return (
      <motion.span
        key={data.change24h}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`font-[family-name:var(--font-mono)] text-2xl md:text-3xl font-bold ${positive ? 'text-[var(--color-accent-green)]' : 'text-[var(--color-accent-red)]'}`}
      >
        {positive ? '▲' : '▼'} {data.change24h}
      </motion.span>
    );
  }

  if (card.key === 'buySell') {
    return (
      <div className="flex items-baseline gap-2">
        <motion.span key={data.buys24h} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="font-[family-name:var(--font-mono)] text-xl md:text-2xl font-bold text-[var(--color-accent-green)]">
          {data.buys24h}
        </motion.span>
        <span className="text-[var(--color-text-secondary)]">/</span>
        <motion.span key={data.sells24h} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="font-[family-name:var(--font-mono)] text-xl md:text-2xl font-bold text-[var(--color-accent-red)]">
          {data.sells24h}
        </motion.span>
      </div>
    );
  }

  return (
    <motion.span
      key={data[card.key]}
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`font-[family-name:var(--font-mono)] text-2xl md:text-3xl font-bold ${card.colorClass}`}
    >
      {data[card.key]}
    </motion.span>
  );
}
