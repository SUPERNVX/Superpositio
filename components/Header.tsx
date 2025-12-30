
import React, { memo, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import useScrollToSection from '../hooks/useScrollToSection';

interface HeaderProps {
    onMenuToggle: () => void;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
    const { scrollToSection } = useScrollToSection();

    return (
        <a href={href} onClick={(e) => scrollToSection(e, href)} className="hover:text-quantum-accent transition-colors">
            {children}
        </a>
    );
};

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsOpen(false); // Fecha o menu após selecionar o idioma
    };

    return (
        <div className="relative">
            <button
                className="text-white hover:text-quantum-accent transition-colors focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <i className="fas fa-globe-americas text-xl"></i>
            </button>
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg py-2 z-50 border border-quantum-secondary/20"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <button
                        onClick={() => changeLanguage('pt')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors text-white"
                    >
                        Português
                    </button>
                    <button
                        onClick={() => changeLanguage('es')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors text-white"
                    >
                        Español
                    </button>
                    <button
                        onClick={() => changeLanguage('en')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors text-white"
                    >
                        English
                    </button>
                    <button
                        onClick={() => changeLanguage('ru')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors text-white"
                    >
                        Русский
                    </button>
                </div>
            )}
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
    const { t } = useTranslation();

    return (
        <header className="fixed w-full z-50 bg-quantum-dark/90 backdrop-blur-sm border-b border-quantum-secondary/20">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-quantum-primary rounded-full flex items-center justify-center">
                        <i className="fas fa-atom text-white text-xl"></i>
                    </div>
                    <h1 className="text-xl font-bold">{t('common.title')}</h1>
                </div>
                <nav className="hidden md:flex space-x-6 text-sm">
                    <NavLink href="#inicio">{t('header.home')}</NavLink>
                    <NavLink href="#particula">{t('header.particle')}</NavLink>
                    <NavLink href="#onda">{t('header.wave')}</NavLink>
                    <NavLink href="#optics">{t('header.optics')}</NavLink>
                    <NavLink href="#light-duality">{t('header.lightDuality')}</NavLink>
                    <NavLink href="#sommerfeld">{t('header.sommerfeld')}</NavLink>
                    <NavLink href="#uncertainty">{t('header.heisenberg')}</NavLink>
                    <NavLink href="#modelo">{t('header.schrodinger')}</NavLink>
                    <NavLink href="#experimentos">{t('header.experiments')}</NavLink>
                    <NavLink href="#superposicao">{t('header.superposition')}</NavLink>
                    <NavLink href="#aplicacoes">{t('header.applications')}</NavLink>
                </nav>
                <div className="flex items-center space-x-4">
                    <LanguageSelector />
                    <button id="menu-toggle" onClick={onMenuToggle} className="md:hidden text-white">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
