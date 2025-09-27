import React from 'react';

const SommerfeldModelSection: React.FC = () => {
    return (
        <section id="sommerfeld" data-observe className="py-20 bg-gradient-to-r from-gray-900 to-quantum-dark opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Modelo Atômico de <a href="https://supernvx.github.io/Atomus/#/sommerfeld" target="_blank" className="text-quantum-primary hover:underline">Sommerfeld</a></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Extensão do modelo de Bohr com órbitas elípticas e números quânticos adicionais</p>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto mt-4"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-primary">Aprimoramento do Modelo de Bohr</h3>
                            <p className="text-gray-300 mb-4">
                                Arnold Sommerfeld aprimorou o modelo atômico de Bohr em 1916, introduzindo a ideia de órbitas elípticas além das circulares. 
                                Este modelo explicava melhor o espectro de elementos mais complexos e introduzia conceitos que seriam fundamentais para a mecânica quântica.
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Órbitas elípticas:</strong> Além das órbitas circulares de Bohr, Sommerfeld introduziu órbitas elípticas</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Número quântico azimutal:</strong> Descreve a forma da órbita (s, p, d, f)</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>Estrutura fina:</strong> Explicação para a divisão de linhas espectrais em múltiplas componentes próximas</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="mt-6 bg-gray-800 rounded-2xl p-8 border border-quantum-accent/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-accent">Números Quânticos em Ação</h3>
                            <p className="text-gray-300 mb-4">
                                O modelo de Sommerfeld introduziu números quânticos que descrevem propriedades específicas de cada órbita:
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>n (principal):</strong> Define o tamanho e energia da órbita</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>l (azimutal):</strong> Define a forma da órbita</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>m (magnético):</strong> Define a orientação espacial da órbita</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="relative w-80 h-80">
                            {/* Nucleus */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-10 h-10 bg-quantum-primary rounded-full glow"></div>
                            </div>
                            
                            {/* Elliptical orbits */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-40 h-20 border border-quantum-secondary/30 rounded-full rotate-45"></div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-52 h-32 border border-quantum-secondary/20 rounded-full rotate-15"></div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-28 h-52 border border-quantum-accent/20 rounded-full rotate-30"></div>
                            </div>
                            
                            {/* Electrons on elliptical paths */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="electron-orbit" style={{ animationName: 'ellipse-orbit-1' }}>
                                    <div className="w-6 h-6 bg-quantum-primary rounded-full glow"></div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="electron-orbit" style={{ animationName: 'ellipse-orbit-2', animationDelay: '2s' }}>
                                    <div className="w-6 h-6 bg-quantum-accent rounded-full glow"></div>
                                </div>
                            </div>
                            
                            <style>{`
                                @keyframes ellipse-orbit-1 {
                                    0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
                                    100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
                                }
                                @keyframes ellipse-orbit-2 {
                                    0% { transform: rotate(0deg) translate(130px, 60px) rotate(0deg); }
                                    100% { transform: rotate(360deg) translate(130px, 60px) rotate(-360deg); }
                                }
                            `}</style>
                            
                            {/* Explanation labels */}
                            <div className="absolute top-10 left-10 bg-gray-900/80 text-xs px-2 py-1 rounded border border-quantum-secondary/30 text-quantum-primary">
                                Orbital circular
                            </div>
                            <div className="absolute bottom-10 right-10 bg-gray-900/80 text-xs px-2 py-1 rounded border border-quantum-secondary/30 text-quantum-accent">
                                Orbital elíptico
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SommerfeldModelSection;