import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import LightWaveExperiment from './experiments/LightWaveExperiment';

const LightDualitySection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="light-duality" data-observe className="py-20 bg-gradient-to-r from-quantum-dark to-gray-900 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="sections.lightDuality.title" components={{ 0: <span className="text-quantum-accent">Luz</span> }} />
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('lightDualitySection.description')}</p>
                    <div className="w-20 h-1 bg-quantum-accent mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <LightWaveExperiment />
                    </div>

                    <div>
                        <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-accent/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-accent">{t('lightDualitySection.wave.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('lightDualitySection.wave.description')}
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>{t('lightDualitySection.wave.interference.title')}:</strong> {t('lightDualitySection.wave.interference.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>{t('lightDualitySection.wave.diffraction.title')}:</strong> {t('lightDualitySection.wave.diffraction.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-accent mt-1 mr-3"></i>
                                    <span><strong>{t('lightDualitySection.wave.polarization.title')}:</strong> {t('lightDualitySection.wave.polarization.description')}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 bg-gray-800 rounded-2xl p-8 border border-quantum-primary/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-primary">{t('lightDualitySection.particle.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('lightDualitySection.particle.description')}
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('lightDualitySection.particle.photons.title')}:</strong> {t('lightDualitySection.particle.photons.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('lightDualitySection.particle.energy.title')}:</strong> {t('lightDualitySection.particle.energy.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('lightDualitySection.particle.momentum.title')}:</strong> {t('lightDualitySection.particle.momentum.description')}</span>
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