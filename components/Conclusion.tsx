
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Conclusion: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section data-observe className="py-20 bg-gradient-to-br from-quantum-dark to-gray-900 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        <Trans i18nKey="sections.conclusion.title" components={{ 0: <span className="text-quantum-primary">Dualidade</span> }} />
                    </h2>
                    <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20">
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            {t('conclusion.paragraph1')}
                        </p>
                        <p className="text-lg text-gray-400 mb-8">
                            {t('conclusion.paragraph2')}
                        </p>
                        <div className="flex justify-center">
                            <div className="w-32 h-32 bg-gradient-to-br from-quantum-primary to-quantum-accent rounded-full flex items-center justify-center glow">
                                <i className="fas fa-infinity text-4xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conclusion;
