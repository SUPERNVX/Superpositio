
import React, { memo } from 'react';
import Button from '../components/ui/Button';
import useScrollToSection from '../hooks/useScrollToSection';

const Hero: React.FC = () => {
    const { scrollToSection } = useScrollToSection();

    return (
        <section id="inicio" data-observe className="min-h-screen flex items-center pt-16 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            A <span className="text-quantum-primary">Dualidade</span> do Elétron
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Descubra como o elétron pode se comportar como partícula e onda, desafiando nossa compreensão clássica da física.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button 
                                variant="primary" 
                                size="lg" 
                                onClick={(e) => scrollToSection(e, '#particula')}
                                className="transform hover:scale-105"
                            >
                                Explorar
                            </Button>
                            <Button 
                                variant="outline" 
                                size="lg" 
                                onClick={(e) => scrollToSection(e, '#experimentos')}
                            >
                                Experimentos
                            </Button>
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="relative w-80 h-80">
                            {/* Núcleo */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-quantum-accent rounded-full glow"></div>
                            </div>
                            
                            {/* Órbitas */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 border border-quantum-secondary/30 rounded-full"></div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-60 h-60 border border-quantum-secondary/20 rounded-full"></div>
                            </div>
                            
                            {/* Elétrons */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="electron-orbit">
                                    <div className="w-6 h-6 bg-quantum-primary rounded-full glow"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="electron-orbit" style={{ animationDelay: '-2s' }}>
                                    <div className="w-6 h-6 bg-quantum-primary rounded-full glow"></div>
                                </div>
                            </div>
                            
                            {/* Ondas */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="wave-animation">
                                    <svg width="300" height="300" viewBox="0 0 300 300">
                                        <circle cx="150" cy="150" r="100" fill="none" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="2" strokeDasharray="5,5">
                                            <animate attributeName="r" values="80;100;80" dur="4s" repeatCount="indefinite"/>
                                        </circle>
                                        <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(79, 70, 229, 0.2)" strokeWidth="1" strokeDasharray="8,8">
                                            <animate attributeName="r" values="100;120;100" dur="5s" repeatCount="indefinite"/>
                                        </circle>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Hero);
