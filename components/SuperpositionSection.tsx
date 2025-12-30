
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SchrodingersCat from './experiments/SchrodingersCat';

const SuperpositionSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="superposicao" data-observe className="py-20 bg-gradient-to-br from-quantum-dark to-gray-900 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="superpositionSection.title" components={{ 0: <span className="text-quantum-primary">Schrödinger</span> }} />
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">{t('superpositionSection.description')}</p>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto mt-4"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20 h-full">
                        <h3 className="text-2xl font-bold mb-6 text-quantum-secondary">{t('superpositionSection.paradox.title')}</h3>
                        <p className="text-gray-300 mb-4">
                            {t('superpositionSection.paradox.description')}
                        </p>
                        <p className="text-gray-300 mb-4">
                            {t('superpositionSection.paradox.illustration')}
                        </p>
                        <p className="text-gray-400">
                            {t('superpositionSection.paradox.explanation')}
                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                       <SchrodingersCat />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuperpositionSection;
