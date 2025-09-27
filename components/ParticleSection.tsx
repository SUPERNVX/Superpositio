
import React from 'react';

const ParticleSection: React.FC = () => {
    return (
        <section id="particula" data-observe className="py-20 bg-gradient-to-r from-quantum-dark to-gray-800 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Comportamento como <span className="text-quantum-primary">Partícula</span></h2>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20">
                                <h3 className="text-2xl font-bold mb-6 text-quantum-accent">Características da Partícula</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 bg-quantum-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i className="fas fa-check text-xs"></i>
                                        </div>
                                        <span><strong>Localização definida:</strong> O elétron pode ser detectado em um ponto específico do espaço.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 bg-quantum-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i className="fas fa-check text-xs"></i>
                                        </div>
                                        <span><strong>Massa e carga:</strong> Possui massa de 9,11 × 10⁻³¹ kg e carga elétrica de -1,6 × 10⁻¹⁹ C.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 bg-quantum-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i className="fas fa-check text-xs"></i>
                                        </div>
                                        <span><strong>Trajetória definida:</strong> Em certos experimentos, segue caminhos previsíveis.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 bg-quantum-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i className="fas fa-check text-xs"></i>
                                        </div>
                                        <span><strong>Colisões:</strong> Pode colidir com outras partículas, transferindo energia e momento.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative">
                            <div className="particle-animation">
                                <div className="w-64 h-64 bg-gradient-to-br from-quantum-primary to-quantum-accent rounded-full flex items-center justify-center glow">
                                    <div className="text-center">
                                        <i className="fas fa-dot-circle text-6xl mb-4"></i>
                                        <p className="text-lg font-bold">PARTÍCULA</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -top-4 -right-4 particle-animation" style={{ animationDelay: '0.5s' }}>
                                <div className="w-12 h-12 bg-quantum-secondary rounded-full"></div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 particle-animation" style={{ animationDelay: '1s' }}>
                                <div className="w-8 h-8 bg-quantum-accent rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParticleSection;
