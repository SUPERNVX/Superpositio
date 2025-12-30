import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const QuantumTunnelingBattery: React.FC = () => {
    const { t } = useTranslation();
    const [view, setView] = useState<'classical' | 'quantum'>('classical');
    const ionCount = 8;
    
    return (
        <div className="flex flex-col items-center text-center">
            <style>{`
                @keyframes bounce {
                    0% { transform: translateX(0); }
                    50% { transform: translateX(150px); }
                    100% { transform: translateX(0); }
                }
                
                @keyframes tunnel-refined {
                    0% { transform: translateX(0px); opacity: 1; }
                    30% { transform: translateX(145px); opacity: 1; }
                    50% { transform: translateX(145px); opacity: 1; }
                    55% { transform: translateX(145px); opacity: 0; }
                    55.1% { transform: translateX(205px); opacity: 0; }
                    55.2% { transform: translateX(205px); opacity: 1; }
                    100% { transform: translateX(350px); opacity: 1; }
                }
                
                .ion-classical {
                    animation: bounce 2s ease-in-out infinite;
                }
                
                .ion-quantum {
                    animation: tunnel-refined 4s ease-in-out infinite;
                }
            `}</style>
            <h3 className="text-lg font-bold mb-2 text-green-400">{t('quantumTunnelingBattery.title')}</h3>
            <p className="text-sm text-gray-400 mb-4 max-w-xl">
               {t('quantumTunnelingBattery.description')}
            </p>

            <div className="w-full max-w-lg h-40 bg-gray-800 rounded-lg my-4 flex items-center justify-between p-4 relative border-2 border-gray-700">
                {/* Anode */}
                <div className="w-1/3 h-full relative">
                    <h4 className="absolute top-0 left-0 text-xs font-bold">{t('quantumTunnelingBattery.anode')}</h4>
                    {Array.from({ length: ionCount }).map((_, i) => {
                        // Calculate position with small offset to avoid vertical stacking
                        const verticalOffset = (i % 2 === 0 ? -5 : 5); // Slightly offset even/odd ions
                        return (
                            <div 
                                key={i}
                                className={`absolute w-4 h-4 rounded-full bg-green-500 shadow-[0_0_8px_theme(colors.green.400)] ${view === 'classical' ? 'ion-classical' : 'ion-quantum'}`}
                                style={{ 
                                    top: `${15 + i * 10 + verticalOffset}%`,
                                    // No animation delay to keep them synchronized
                                }}
                            ></div>
                        );
                    })}
                </div>
                
                {/* Barrier */}
                <div className="w-2 h-full bg-gray-600 shadow-lg relative">
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap">{t('quantumTunnelingBattery.barrier')}</span>
                </div>
                
                {/* Cathode */}
                <div className="w-1/3 h-full relative">
                    <h4 className="absolute top-0 right-0 text-xs font-bold">{t('quantumTunnelingBattery.cathode')}</h4>
                </div>
            </div>

            <div className="flex gap-4">
                <button 
                    onClick={() => setView('classical')}
                    className={`px-4 py-2 font-bold rounded-full transition-all ${view === 'classical' ? 'bg-blue-500 text-white' : 'bg-gray-600'}`}
                >
                    {t('quantumTunnelingBattery.classicalView')}
                </button>
                <button 
                    onClick={() => setView('quantum')}
                    className={`px-4 py-2 font-bold rounded-full transition-all ${view === 'quantum' ? 'bg-green-500 text-white' : 'bg-gray-600'}`}
                >
                    {t('quantumTunnelingBattery.quantumView')}
                </button>
            </div>
        </div>
    );
};

export default QuantumTunnelingBattery;
