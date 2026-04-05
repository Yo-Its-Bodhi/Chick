import { useState } from 'react';

const CHICK_CONTRACT = '0x37385e458bb1b19c614c238e5109e59ac605df7a';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CHICK_CONTRACT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const el = document.createElement('textarea');
      el.value = CHICK_CONTRACT;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer className="border-t border-white/5 py-12 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Contract address */}
        <p className="text-sm text-[var(--color-text-secondary)] mb-2">$CHICK Contract Address</p>
        <button
          onClick={copy}
          className="glass px-4 py-2 rounded-lg text-xs md:text-sm font-mono text-[var(--color-accent-yellow)] hover:text-white transition-colors cursor-pointer mb-1 max-w-full overflow-hidden text-ellipsis"
          title="Click to copy"
        >
          {CHICK_CONTRACT}
          <span className="ml-2 text-[var(--color-text-secondary)]">{copied ? '✓ Copied!' : '📋'}</span>
        </button>
        <p className="text-xs text-[var(--color-text-secondary)] mb-1 mt-4">$EGG Contract Address</p>
        <p className="text-xs text-[var(--color-accent-orange)] mb-8">Coming Soon 🥚</p>

        {/* Branding */}
        <div className="mb-8">
          <span className="text-3xl">🐔</span>
          <p className="font-[family-name:var(--font-heading)] font-bold text-lg gradient-text-yellow mt-2">THE CHICK</p>
          <p className="text-xs text-[var(--color-text-secondary)]">on Shido Network</p>
        </div>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto">
          <p className="text-[10px] text-[var(--color-text-secondary)]/60 leading-relaxed">
            <strong>Disclaimer:</strong> This is a meme token website, created purely for entertainment purposes.
            $CHICK and $EGG have no utility beyond the ecosystem described, no intrinsic value, and are not intended as investments.
            Nothing on this website or related materials constitutes financial advice.
            Cryptocurrency investments are highly speculative — only participate if you are prepared to lose everything you put in.
            DYOR. Not financial advice. We're literally a chicken.
          </p>
        </div>

        <p className="text-xs text-[var(--color-text-secondary)]/40 mt-8">
          © {new Date().getFullYear()} Crazy Chicken. All rights reserved. 🐔
        </p>
      </div>
    </footer>
  );
}
