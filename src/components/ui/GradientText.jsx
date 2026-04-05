export default function GradientText({ children, gradient = 'yellow', as: Tag = 'span', className = '' }) {
  return (
    <Tag className={`gradient-text-${gradient} ${className}`}>
      {children}
    </Tag>
  );
}
