import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Stats', href: '#stats' },
  { label: 'NFTs', href: '#nfts' },
  { label: 'Egg', href: '#egg' },
  { label: 'About', href: '#about' },
  { label: 'Chart', href: '#chart' },
  { label: 'Community', href: '#community' },
];

const SWAP_LINKS = [
  { name: 'Shido DEX', url: 'https://pool.shido.io/swap/', emoji: '⚡' },
  { name: 'BubbleSwap', url: 'https://app.bubbleswap.io', emoji: '🫧' },
  { name: 'BodhiX', url: 'https://swap.bodhix.io', emoji: '🧘' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
        style={{ borderRadius: 0 }}
      >
        <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-[family-name:var(--font-heading)] font-bold text-lg flex items-center gap-2">
            <span className="text-2xl">🐔</span>
            <span className="gradient-text-yellow">CRAZY CHICKEN</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <div className="ml-2 flex items-center gap-2">
              {SWAP_LINKS.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#00FF88] to-[#00cc6a] text-black font-bold text-xs transition-shadow hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] flex items-center gap-1"
                >
                  <span>{s.emoji}</span>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-white" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-white" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            onClick={() => setMobileOpen(false)}
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl font-[family-name:var(--font-heading)] font-bold text-white hover:text-[var(--color-accent-yellow)] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </motion.a>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              {SWAP_LINKS.map(s => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#00FF88] to-[#00cc6a] text-black font-bold text-base flex items-center justify-center gap-2"
                >
                  <span>{s.emoji}</span>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
