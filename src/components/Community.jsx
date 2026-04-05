import { motion } from 'framer-motion';
import SectionReveal from './ui/SectionReveal';

const SOCIALS = [
  {
    name: 'X (Twitter)',
    url: 'https://x.com/CHICK_SHI20',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
    ),
    color: 'hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/+AgMyEfk-kcRhZDY0',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
    ),
    color: 'hover:text-[#26A5E4] hover:shadow-[0_0_30px_rgba(38,165,228,0.2)]',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@crazi.chicken',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
    ),
    color: 'hover:text-[#FF0050] hover:shadow-[0_0_30px_rgba(255,0,80,0.2)]',
  },
];

const ANALYTICS = [
  { name: 'CoinMarketCap', url: 'https://coinmarketcap.com/dexscan/shido%20network/0x600c9561b00e3bc569211dbb47ac134fd46d6746/' },
  { name: 'GeckoTerminal', url: 'https://www.geckoterminal.com/shido-network/pools/0x600c9561b00e3bc569211dbb47ac134fd46d6746' },
  { name: 'DEXTools', url: 'https://www.dextools.io/app/en/shido/pair-explorer/0x600c9561b00e3bc569211dbb47ac134fd46d6746' },
  { name: 'DexHub', url: 'https://dexhub.mavnode.io/' },
];

export default function Community() {
  return (
    <section id="community" className="section-padding">
      <div className="max-w-[1200px] mx-auto text-center">
        <SectionReveal>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white mb-4">
            Join The Coop 🐔
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg mb-12 max-w-lg mx-auto">
            The chicken community never sleeps. Jump in.
          </p>
        </SectionReveal>

        {/* Social buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {SOCIALS.map((s, i) => (
            <SectionReveal key={s.name} delay={i * 0.1}>
              <motion.a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center gap-2 text-[var(--color-text-secondary)] transition-all duration-300 ${s.color}`}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
                <span className="text-[10px] font-bold">{s.name}</span>
              </motion.a>
            </SectionReveal>
          ))}
        </div>

        {/* Analytics links */}
        <SectionReveal delay={0.3}>
          <p className="text-sm text-[var(--color-text-secondary)] mb-4">Track $CHICK on</p>
          <div className="flex flex-wrap justify-center gap-3">
            {ANALYTICS.map(a => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-4 py-2 rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors glass-hover"
              >
                {a.name} ↗
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
