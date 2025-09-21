const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseClasses = `btn btn-${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
};

export default Button;