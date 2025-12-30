import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const UncertaintyPrincipleSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="uncertainty" data-observe className="py-20 bg-gradient-to-r from-quantum-dark to-gray-900 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="uncertaintySection.title" components={{ 0: <span className="text-quantum-accent">Incerteza</span> }} />
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('uncertaintySection.description')}</p>
                    <div className="w-20 h-1 bg-quantum-accent mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col items-center">
                        <div className="relative w-72 h-72">
                            {/* Main probability cloud */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-48 h-48 rounded-full" style={{
                                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0) 70%)'
                                }}></div>
                            </div>

                            {/* Uncertain position indicators */}
                            {[...Array(12)].map((_, i) => {
                                const angle = Math.random() * 2 * Math.PI;
                                const radius = 60 + Math.random() * 50; // Vary radius between 60-110
                                return (
                                    <div
                                        key={i}
                                        className="absolute w-3 h-3 rounded-full bg-purple-400 animate-pulse"
                                        style={{
                                            top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                                            left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                                            animationDelay: `${i * 0.2}s`,
                                            opacity: 0.7
                                        }}
                                    ></div>
                                );
                            })}

                            {/* Central "nucleus" */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-6 h-6 bg-quantum-primary rounded-full glow"></div>
                            </div>

                            {/* Focus point animation */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0">
                                <div className="w-32 h-32 border-2 border-quantum-accent rounded-full animate-ping"></div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <h3 className="text-xl font-bold text-quantum-accent mb-2">{t('uncertaintySection.action.title')}</h3>
                            <p className="text-gray-400 text-sm">
                                {t('uncertaintySection.action.description')}
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-accent/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-accent">{t('uncertaintySection.simple.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('uncertaintySection.simple.description')}
                            </p>
                            <div className="bg-gray-900 p-4 rounded-lg border border-quantum-primary/20 mb-4">
                                <div className="text-center">
                                    <p className="text-lg font-mono font-bold text-quantum-primary">
                                        Δx × Δp ≥ ℏ/2
                                    </p>
                                    <p className="text-sm text-gray-400 mt-2">
                                        {t('uncertaintySection.simple.formula')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 bg-gray-800 rounded-2xl p-8 border border-quantum-primary/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-primary">{t('uncertaintySection.importance.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('uncertaintySection.importance.description')}
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('uncertaintySection.importance.limit.title')}:</strong> {t('uncertaintySection.importance.limit.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('uncertaintySection.importance.observation.title')}:</strong> {t('uncertaintySection.importance.observation.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('uncertaintySection.importance.foundation.title')}:</strong> {t('uncertaintySection.importance.foundation.description')}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UncertaintyPrincipleSection;