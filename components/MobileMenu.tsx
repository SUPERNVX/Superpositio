
import React, { memo } from 'react';
import useScrollToSection from '../hooks/useScrollToSection';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ href, onClick, children }) => {
    const { scrollToSection } = useScrollToSection();
    
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        scrollToSection(e, href);
        onClick(); // Close menu after click
    };
    
    return (
        <a href={href} onClick={handleClick} className="text-2xl hover:text-quantum-accent transition-colors">
            {children}
        </a>
    );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div id="mobile-menu" className="fixed inset-0 bg-quantum-dark z-40 md:hidden">
            <div className="flex justify-end p-4">
                <button id="close-menu" onClick={onClose} className="text-white">
                    <i className="fas fa-times text-2xl"></i>
                </button>
            </div>
            <div className="flex flex-col items-center space-y-6 py-12">
                <MobileNavLink href="#inicio" onClick={onClose}>Início</MobileNavLink>
                <MobileNavLink href="#particula" onClick={onClose}>Partícula</MobileNavLink>
                <MobileNavLink href="#onda" onClick={onClose}>Onda</MobileNavLink>
                <MobileNavLink href="#modelo" onClick={onClose}>Modelo Atômico</MobileNavLink>
                <MobileNavLink href="#experimentos" onClick={onClose}>Experimentos</MobileNavLink>
                <MobileNavLink href="#superposicao" onClick={onClose}>Superposição</MobileNavLink>
                <MobileNavLink href="#aplicacoes" onClick={onClose}>Aplicações</MobileNavLink>
            </div>
        </div>
    );
};

export default memo(MobileMenu);
