import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'font-bold rounded-full transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-quantum-primary hover:bg-quantum-secondary text-white',
    secondary: 'bg-quantum-secondary hover:bg-indigo-400 text-white',
    outline: 'bg-transparent border-2 border-quantum-primary text-quantum-primary hover:bg-quantum-primary/10',
    ghost: 'text-white hover:text-quantum-accent transition-colors'
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-3 px-8 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;