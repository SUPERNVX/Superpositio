import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import QuantumMaze from './applications/QuantumMaze';
import SemiconductorTransistor from './applications/SemiconductorTransistor';
import QuantumTunnelingBattery from './applications/QuantumTunnelingBattery';

type Application = 'quantum-computing' | 'semiconductors' | 'batteries';

const ApplicationsSection: React.FC = () => {
    const { t } = useTranslation();
    const [activeApp, setActiveApp] = useState<Application>('quantum-computing');

    const applications: { id: Application; name: string; icon: string }[] = [
        { id: 'quantum-computing', name: t('applicationsSection.quantumComputing'), icon: 'fa-laptop-code' },
        { id: 'semiconductors', name: t('applicationsSection.semiconductors'), icon: 'fa-microchip' },
        { id: 'batteries', name: t('applicationsSection.batteries'), icon: 'fa-battery-full' },
    ];

    const renderActiveComponent = () => {
        switch (activeApp) {
            case 'quantum-computing':
                return <QuantumMaze />;
            case 'semiconductors':
                return <SemiconductorTransistor />;
            case 'batteries':
                return <QuantumTunnelingBattery />;
            default:
                return null;
        }
    };

    return (
        <section id="aplicacoes" data-observe className="py-20 bg-gradient-to-r from-gray-800 to-quantum-dark opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="sections.applications.title" components={{ 0: <span className="text-quantum-accent">Superposição</span> }} />
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('applicationsSection.description')}</p>
                    <div className="w-20 h-1 bg-quantum-accent mx-auto mt-4"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                    {applications.map(app => (
                        <button
                            key={app.id}
                            onClick={() => setActiveApp(app.id)}
                            className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 flex items-center gap-2 border-2 ${
                                activeApp === app.id
                                    ? 'bg-quantum-accent border-quantum-accent text-white shadow-lg shadow-cyan-500/20'
                                    : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600 text-gray-300'
                            }`}
                        >
                            <i className={`fas ${app.icon}`}></i>
                            <span>{app.name}</span>
                        </button>
                    ))}
                </div>

                <div className="bg-gray-900/50 rounded-2xl p-4 md:p-8 border border-quantum-secondary/20 min-h-[400px]">
                    {renderActiveComponent()}
                </div>
            </div>
        </section>
    );
};

export default ApplicationsSection;