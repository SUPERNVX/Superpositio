
import React from 'react';

const WaveSection: React.FC = () => {
    return (
        <section id="onda" data-observe className="py-20 bg-gradient-to-r from-gray-800 to-quantum-dark opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comportamento como <span className="text-quantum-accent">Onda</span></h2>
                    <div className="w-20 h-1 bg-quantum-accent mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="wave-animation">
                                <div className="w-64 h-64 bg-gradient-to-br from-quantum-accent to-cyan-400 rounded-full flex items-center justify-center glow">
                                    <div className="text-center">
                                        <i className="fas fa-wave-square text-6xl mb-4"></i>
                                        <p className="text-lg font-bold">ONDA</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="wave-animation" style={{ animationDelay: '0.5s' }}>
                                    <svg width="300" height="300" viewBox="0 0 300 300">
                                        <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2">
                                            <animate attributeName="r" values="100;120;100" dur="3s" repeatCount="indefinite"/>
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-accent/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-accent">Características da Onda</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-quantum-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <i className="fas fa-check text-xs"></i>
                                    </div>
                                    <span><strong>Comprimento de onda:</strong> Associado à quantidade de movimento (λ = h/p).</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-quantum-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <i className="fas fa-check text-xs"></i>
                                    </div>
                                    <span><strong>Frequência:</strong> Relacionada à energia do elétron (E = hf).</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-quantum-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <i className="fas fa-check text-xs"></i>
                                    </div>
                                    <span><strong>Difração:</strong> Pode se espalhar ao passar por fendas estreitas.</span>
                                </li>
                                <li className="flex items-start">
                                    <div className="w-6 h-6 bg-quantum-accent rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        <i className="fas fa-check text-xs"></i>
                                    </div>
                                    <span><strong>Interferência:</strong> Pode se sobrepor a outras ondas, criando padrões de reforço e cancelamento.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaveSection;
