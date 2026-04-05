import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from './ui/SectionReveal';
import GlowButton from './ui/GlowButton';

const IPFS_BASE = 'https://bafybeif35dzvwxff67ur4wxibxuhjuiofbtm5ld3rhso2cveaflv2vph34.ipfs.w3s.link';
const MINT_URL = 'https://crazy-chicken-nft-part-1.nfts2.me/';

// Showcase 12 NFTs from the collection
const NFTS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Crazy Chicken #${i + 1}`,
  image: `${IPFS_BASE}/${i + 1}.webp`,
}));

export default function NftGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="nfts" className="relative overflow-hidden">
      {/* Subtle pink/purple glow bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(168,85,247,0.06)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,20,147,0.04)_0%,_transparent_50%)]" />

      <div className="section-padding max-w-[1200px] mx-auto relative z-10">
        <SectionReveal>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="inline-block mb-4"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#A855F7]/20 to-[#FF1493]/20 border-2 border-[#A855F7]/30 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                🎨
              </div>
            </motion.div>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              <span className="gradient-text-purple">Crazy Chicken NFTs</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto mb-2">
              90 unique, hand-crafted digital chickens — bold, vibrant, and absolutely unhinged
            </p>
            <div className="flex items-center justify-center gap-3 text-sm">
              <span className="glass px-3 py-1 rounded-full font-[family-name:var(--font-mono)] text-[var(--color-accent-yellow)]">
                25,000 SHIDO
              </span>
              <span className="text-[var(--color-text-secondary)]">per mint</span>
            </div>
          </div>
        </SectionReveal>

        {/* NFT Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-10">
          {NFTS.map((nft, i) => (
            <SectionReveal key={nft.id} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelected(nft)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="font-[family-name:var(--font-heading)] text-sm font-bold text-white">{nft.name}</span>
                  </div>
                </div>
                <div className="px-3 py-2 flex items-center justify-between">
                  <span className="text-xs font-bold text-white/70">#{nft.id}</span>
                  <span className="text-xs text-[var(--color-accent-green)]">Minted</span>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* CTA */}
        <SectionReveal>
          <div className="text-center space-y-4">
            <p className="text-[var(--color-text-secondary)]">
              <span className="font-bold text-white">90</span> total NFTs in Part 1 — collect yours now
            </p>
            <GlowButton href={MINT_URL} color="purple">
              Mint Your Chicken 🎨
            </GlowButton>
          </div>
        </SectionReveal>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-lg w-full glass rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                alt={selected.name}
                className="w-full aspect-square object-cover"
              />
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                    {selected.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">Crazy Chicken NFT Part 1</p>
                </div>
                <a
                  href={MINT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#A855F7] to-[#FF1493] text-white font-bold text-sm transition-shadow hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  Mint Now
                </a>
              </div>
              <button
                className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
