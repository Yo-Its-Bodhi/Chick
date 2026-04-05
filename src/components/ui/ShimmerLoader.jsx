export default function ShimmerLoader({ className = '', lines = 1 }) {
  return (
    <div className={className}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="shimmer-bg rounded-lg h-6 mb-2"
          style={{ width: `${80 + Math.random() * 20}%` }}
        />
      ))}
    </div>
  );
}
