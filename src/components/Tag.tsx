interface TagProps {
  children: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className = '' }: TagProps) => {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30 ${className}`}>
      {children}
    </span>
  );
};

export default Tag; 