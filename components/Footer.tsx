
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 border-t border-quantum-secondary/20 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-quantum-primary rounded-full flex items-center justify-center">
                                <i className="fas fa-atom text-white text-xl"></i>
                            </div>
                            <h3 className="text-xl font-bold">{t('common.title')}</h3>
                        </div>
                        <p className="text-gray-400">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4">{t('footer.resources')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/README.md" target="_blank" className="hover:text-quantum-primary transition-colors">{t('footer.documentation')}</a></li>
                            <li><a href="#experimentos" onClick={(e) => handleScrollClick(e, '#experimentos')} className="hover:text-quantum-primary transition-colors">{t('common.experiments')}</a></li>
                            <li><a href="https://supernvx.github.io/Atomus/#/dalton" target="_blank" className="hover:text-quantum-primary transition-colors">{t('footer.atomicModels')}</a></li>
                        </ul>
                    </div>

                    {/* Removed Contato section */}
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
