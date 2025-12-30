
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const ParticleSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="particula" data-observe className="py-20 bg-gradient-to-r from-quantum-dark to-gray-800 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="sections.particle.title" components={{ 0: <span className="text-quantum-primary">Partícula</span> }} />
                    </h2>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20">
                                <h3 className="text-2xl font-bold mb-6 text-quantum-accent">{t('particleSection.characteristics')}</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 bg-quantum-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i className="fas fa-check text-xs"></i>
                                        </div>
                                        <span><strong>{t('particleSection.definedLocation.title')}:</strong> {t('particleSection.definedLocation.description')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 bg-quantum-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i className="fas fa-check text-xs"></i>
                                        </div>
                                        <span><strong>{t('particleSection.massCharge.title')}:</strong> {t('particleSection.massCharge.description')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 bg-quantum-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i className="fas fa-check text-xs"></i>
                                        </div>
                                        <span><strong>{t('particleSection.definedPath.title')}:</strong> {t('particleSection.definedPath.description')}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-6 h-6 bg-quantum-primary rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <i className="fas fa-check text-xs"></i>
                                        </div>
                                        <span><strong>{t('particleSection.collisions.title')}:</strong> {t('particleSection.collisions.description')}</span>
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
                                        <p className="text-lg font-bold">{t('particleSection.particle')}</p>
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
