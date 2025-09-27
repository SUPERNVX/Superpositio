
import React from 'react';

const SchrodingerModelSection: React.FC = () => {
    return (
        <section id="modelo" data-observe className="py-20 bg-gradient-to-r from-gray-800 to-quantum-dark opacity-0 translate-y-10 transition-all">
            <style>{`
                @keyframes flicker {
                  0%, 100% { opacity: 1; transform: scale(1); }
                  50% { opacity: 0.2; transform: scale(0.5); }
                }
                .sparkle {
                  position: absolute;
                  width: 3px;
                  height: 3px;
                  background: white;
                  border-radius: 50%;
                  animation: flicker 2s infinite ease-in-out alternate;
                  mix-blend-mode: screen;
                }
            `}</style>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">O Modelo Atômico de <a href="https://supernvx.github.io/Atomus/#/schrodinger" target="_blank" className="text-quantum-accent hover:underline">Schrödinger</a></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Abandonando órbitas fixas por um mar de possibilidades.</p>
                    <div className="w-20 h-1 bg-quantum-accent mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center items-center h-64 md:h-80">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Nucleus */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-quantum-primary rounded-full glow"></div>
                            </div>
                             {/* Probability Cloud */}
                             <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(6, 182, 212, 0) 70%)'}}></div>
                            </div>
                            {/* Sparkles */}
                            {Array.from({ length: 50 }).map((_, i) => {
                                const angle = Math.random() * 2 * Math.PI;
                                const radius = Math.random() * Math.random() * 140; // Skew distribution towards center
                                return (
                                    <div
                                        key={i}
                                        className="sparkle"
                                        style={{
                                            top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                                            left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                                            animationDelay: `${Math.random() * 2}s`
                                        }}
                                    ></div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-accent/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-accent">A Nuvem de Probabilidades</h3>
                            <p className="text-gray-300 mb-4">
                                Diferente do modelo de Bohr com órbitas definidas, o modelo de Schrödinger descreve o elétron como uma "nuvem". Esta nuvem não representa o elétron espalhado, mas sim a **probabilidade** de encontrá-lo em qualquer ponto ao redor do núcleo.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start"><i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i> Onde a nuvem é mais densa, a probabilidade de encontrar o elétron é maior.</li>
                                <li className="flex items-start"><i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i> O Princípio da Incerteza de Heisenberg afirma que não podemos saber simultaneamente a posição exata e o momento do elétron.</li>
                                <li className="flex items-start"><i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i> O ato de medir "força" o elétron a assumir uma posição, colapsando a nuvem de probabilidade.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchrodingerModelSection;
