import React from 'react';
import LightWaveExperiment from './experiments/LightWaveExperiment';

const LightDualitySection: React.FC = () => {
    return (
        <section id="light-duality" data-observe className="py-20 bg-gradient-to-r from-quantum-dark to-gray-900 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Dualidade Onda-Partícula da <span className="text-quantum-accent">Luz</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Como a luz exibe propriedades tanto de ondas quanto de partículas</p>
                    <div className="w-20 h-1 bg-quantum-accent mx-auto mt-4"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <LightWaveExperiment />
                    </div>
                    
                    <div>
                        <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-accent/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-accent">Luz como Onda</h3>
                            <p className="text-gray-300 mb-4">
                                A luz demonstra propriedades de onda em diversos fenômenos, como interferência, difração e polarização. 
                                Essas propriedades só podem ser explicadas se considerarmos a luz como uma onda eletromagnética.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>Interferência:</strong> Padrões de reforço e cancelamento quando ondas de luz se sobrepõem</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>Difração:</strong> Capacidade da luz de contornar obstáculos e se espalhar por fendas</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>Polarização:</strong> Ondas de luz vibrando em direções específicas</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="mt-6 bg-gray-800 rounded-2xl p-8 border border-quantum-primary/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-primary">Luz como Partícula</h3>
                            <p className="text-gray-300 mb-4">
                                A luz também se comporta como partículas chamadas fótons. Este comportamento é evidente em fenômenos como o efeito fotoelétrico 
                                e o efeito Compton, onde a luz interage com matéria em unidades discretas de energia.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Fótons:</strong> Pacotes discretos de energia sem massa</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Energia:</strong> E = hf, onde h é a constante de Planck e f é a frequência</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Momento:</strong> p = h/λ, mesmo tendo massa zero, fótons possuem momento</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LightDualitySection;