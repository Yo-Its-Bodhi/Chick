const POOL_URL = 'https://api.geckoterminal.com/api/v2/networks/shido-network/pools/0x600c9561b00e3bc569211dbb47ac134fd46d6746';

function fmt(num, decimals = 2) {
  if (num == null || isNaN(num)) return '—';
  const n = Number(num);
  if (n >= 1e9) return `$${(n / 1e9).toFixed(decimals)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(decimals)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(decimals)}K`;
  return `$${n.toFixed(decimals)}`;
}

function fmtPrice(val) {
  if (val == null) return '—';
  const n = Number(val);
  if (n === 0) return '$0';
  if (n < 0.0001) {
    // Count leading zeros after "0." then show 2 significant digits
    const s = n.toFixed(20);
    const match = s.match(/^0\.(0+)/);
    const zeros = match ? match[1].length : 0;
    return `$${n.toFixed(zeros + 2)}`;
  }
  if (n < 0.01) return `$${n.toFixed(8)}`;
  if (n < 1) return `$${n.toFixed(6)}`;
  return `$${n.toFixed(2)}`;
}

function fmtPct(val) {
  if (val == null) return '—';
  const n = Number(val);
  const sign = n >= 0 ? '+' : '';
  return `${sign}${n.toFixed(2)}%`;
}

function fmtInt(num) {
  if (num == null) return '—';
  return Number(num).toLocaleString('en-US');
}

export async function fetchPoolData() {
  const resp = await fetch(POOL_URL, {
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  });
  if (!resp.ok) throw new Error(`GeckoTerminal API error: ${resp.status}`);
  const json = await resp.json();
  const a = json?.data?.attributes;
  if (!a) throw new Error('Invalid API response structure');

  return {
    price: fmtPrice(a.base_token_price_usd),
    priceRaw: Number(a.base_token_price_usd) || 0,
    change24h: fmtPct(a.price_change_percentage?.h24),
    change24hRaw: Number(a.price_change_percentage?.h24 ?? 0),
    volume24h: fmt(Number(a.volume_usd?.h24 ?? 0)),
    fdv: fmt(Number(a.fdv_usd ?? 0)),
    buys24h: fmtInt(a.transactions?.h24?.buys),
    sells24h: fmtInt(a.transactions?.h24?.sells),
    liquidity: fmt(Number(a.reserve_in_usd ?? 0)),
    poolName: a.name,
  };
}
