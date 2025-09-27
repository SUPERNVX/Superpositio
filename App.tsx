
import React, { useState } from 'react';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import ParticleSection from './components/ParticleSection';
import WaveSection from './components/WaveSection';
import SchrodingerModelSection from './components/SchrodingerModelSection';
import ExperimentsSection from './components/ExperimentsSection';
import SuperpositionSection from './components/SuperpositionSection';
import ApplicationsSection from './components/ApplicationsSection';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Use the custom hook for intersection observer functionality
    useIntersectionObserver();

    return (
        <>
            <Header onMenuToggle={() => setIsMenuOpen(true)} />
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <main>
                <Hero />
                <ParticleSection />
                <WaveSection />
                <SchrodingerModelSection />
                <ExperimentsSection />
                <SuperpositionSection />
                <ApplicationsSection />
                <Conclusion />
            </main>
            <Footer />
        </>
    );
};

export default App;
