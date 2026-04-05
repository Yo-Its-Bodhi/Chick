import SectionReveal from './ui/SectionReveal';

export default function LiveChart() {
  return (
    <section id="chart" className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <SectionReveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-2 text-center">
            Live Chart 📈
          </h2>
          <p className="text-[var(--color-text-secondary)] text-center mb-8">
            CHICK / WSHIDO — powered by GeckoTerminal
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="glass rounded-2xl overflow-hidden glow-blue" style={{ border: '1px solid rgba(0,212,255,0.1)' }}>
            <iframe
              src="https://www.geckoterminal.com/shido-network/pools/0x600c9561b00e3bc569211dbb47ac134fd46d6746?embed=1&info=0&swaps=0&grayscale=0&light_chart=0"
              title="CHICK/WSHIDO Chart"
              width="100%"
              height="420"
              frameBorder="0"
              loading="lazy"
              allow="clipboard-write"
              className="w-full"
              style={{ minHeight: '360px' }}
            />
          </div>
          <p className="text-center mt-4">
            <a
              href="https://www.geckoterminal.com/shido-network/pools/0x600c9561b00e3bc569211dbb47ac134fd46d6746"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-accent-blue)] hover:underline"
            >
              View full chart on GeckoTerminal →
            </a>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
