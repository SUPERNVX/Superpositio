import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { WebGLSpectrum } from './ui/WebGLSpectrum';

const OpticsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="optics" data-observe className="py-20 bg-gradient-to-r from-gray-900 to-quantum-dark opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="sections.optics.title" components={{ 0: <span className="text-quantum-primary">Óptica</span> }} />
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('opticsSection.description')}</p>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-primary">{t('opticsSection.wavelength.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('opticsSection.wavelength.description')}
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('opticsSection.wavelength.wavelength.title')}:</strong> {t('opticsSection.wavelength.wavelength.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('opticsSection.wavelength.frequency.title')}:</strong> {t('opticsSection.wavelength.frequency.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('opticsSection.wavelength.relation.title')}:</strong> {t('opticsSection.wavelength.relation.description')}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8 bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20">
                            <h3 className="text-2xl font-bold mb-6 text-quantum-primary">{t('opticsSection.eye.title')}</h3>
                            <p className="text-gray-300 mb-4">
                                {t('opticsSection.eye.description')}
                            </p>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('opticsSection.eye.conesS.title')}:</strong> {t('opticsSection.eye.conesS.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('opticsSection.eye.conesM.title')}:</strong> {t('opticsSection.eye.conesM.description')}</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check-circle text-quantum-primary mt-1 mr-3"></i>
                                    <span><strong>{t('opticsSection.eye.conesL.title')}:</strong> {t('opticsSection.eye.conesL.description')}</span>
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
                                <h4 className="text-lg font-bold text-quantum-accent mb-2">{t('opticsSection.spectrum.title')}</h4>
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>{t('opticsSection.spectrum.range1')}</span>
                                    <span>{t('opticsSection.spectrum.range2')}</span>
                                    <span>{t('opticsSection.spectrum.range3')}</span>
                                    <span>{t('opticsSection.spectrum.range4')}</span>
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