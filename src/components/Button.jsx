export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'text-sm font-medium px-5 py-2.5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-teal-900 text-cream hover:bg-teal-800',
    secondary: 'border border-teal-900 text-teal-900 hover:bg-teal-900 hover:text-cream',
    danger: 'bg-coral-500 text-cream hover:bg-coral-500/90',
    ghost: 'text-teal-900 hover:bg-teal-900/5',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
