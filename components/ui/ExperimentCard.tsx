import React from 'react';

interface ExperimentCardProps {
  title: string;
  description: string;
  icon: string;
  iconColor?: string;
  children: React.ReactNode;
  className?: string;
}

const ExperimentCard: React.FC<ExperimentCardProps> = ({ 
  title, 
  description, 
  icon, 
  iconColor = 'text-quantum-primary', 
  children,
  className = ''
}) => {
  return (
    <div className={`experiment-card bg-gray-800 rounded-2xl p-6 border border-quantum-secondary/20 transition-all duration-300 ${className}`}>
      <div className={`${iconColor} text-4xl mb-4`}>
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">
        {description}
      </p>
      <div className="mt-4">
        {children}
      </div>
    </div>
  );
};

export default ExperimentCard;