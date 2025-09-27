
import React, { memo } from 'react';
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

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
    return (
        <header className="fixed w-full z-50 bg-quantum-dark/90 backdrop-blur-sm border-b border-quantum-secondary/20">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-quantum-primary rounded-full flex items-center justify-center">
                        <i className="fas fa-atom text-white text-xl"></i>
                    </div>
                    <h1 className="text-xl font-bold">Dualidade Onda-Partícula</h1>
                </div>
                <nav className="hidden md:flex space-x-6 text-sm">
                    <NavLink href="#inicio">Início</NavLink>
                    <NavLink href="#particula">Partícula</NavLink>
                    <NavLink href="#onda">Onda</NavLink>
                    <NavLink href="#modelo">Modelo Atômico</NavLink>
                    <NavLink href="#experimentos">Experimentos</NavLink>
                    <NavLink href="#superposicao">Superposição</NavLink>
                    <NavLink href="#aplicacoes">Aplicações</NavLink>
                </nav>
                <button id="menu-toggle" onClick={onMenuToggle} className="md:hidden text-white">
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </header>
    );
};

export default memo(Header);
