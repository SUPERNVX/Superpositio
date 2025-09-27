import React from 'react';
import { WebGLSpectrum } from './ui/WebGLSpectrum';

const OpticsSection: React.FC = () => {
    return (
        <section id="optics" data-observe className="py-20 bg-gradient-to-r from-gray-900 to-quantum-dark opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Fundamentos de <span className="text-quantum-primary">Óptica</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Compreendendo o comprimento de onda e o que o olho humano é capaz de perceber</p>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto mt-4"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-primary">O Comprimento de Onda da Luz</h3>
                            <p className="text-gray-300 mb-4">
                                A luz visível é uma forma de radiação eletromagnética que se propaga em ondas. Cada cor que vemos corresponde a um comprimento de onda específico. 
                                O espectro visível varia aproximadamente de 380 nanômetros (violeta) a 750 nanômetros (vermelho).
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Comprimento de onda (λ):</strong> Distância entre dois picos consecutivos da onda</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Frequência (f):</strong> Número de ciclos por segundo (medido em Hertz)</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Relação:</strong> c = λ × f, onde c é a velocidade da luz (3×10⁸ m/s)</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="mt-8 bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-primary">O Que o Olho Percebe</h3>
                            <p className="text-gray-300 mb-4">
                                O olho humano tem células chamadas cones que respondem a diferentes comprimentos de onda da luz visível. 
                                Existem três tipos principais de cones, sensíveis à luz vermelha (L), verde (M) e azul (S).
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Cones S:</strong> Sensíveis ao azul (400-500 nm)</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Cones M:</strong> Sensíveis ao verde (500-600 nm)</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Cones L:</strong> Sensíveis ao vermelho (600-700 nm)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-md">
                            <div className="relative h-72 rounded-2xl overflow-hidden border border-quantum-secondary/20 bg-gradient-to-br from-gray-800 to-quantum-dark">
                                {/* WebGL Shader for Spectrum Visualization - adjusted to local container */}
                                <WebGLSpectrum className="w-full h-full" />
                            </div>
                            
                            <div className="mt-6 text-center">
                                <h4 className="text-lg font-bold text-quantum-accent mb-2">Espectro Eletromagnético Visível</h4>
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>380nm</span>
                                    <span>500nm</span>
                                    <span>600nm</span>
                                    <span>750nm</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-8 w-64 h-64 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full border-2 border-quantum-primary"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full border border-quantum-accent/50"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-quantum-primary rounded-full glow"></div>
                            </div>
                            
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-6 h-6 bg-quantum-primary rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                                <div className="w-6 h-6 bg-quantum-accent rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                <div className="w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
                                <div className="w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpticsSection;