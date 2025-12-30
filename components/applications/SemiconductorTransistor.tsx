
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const SemiconductorTransistor: React.FC = () => {
    const { t } = useTranslation();
    const [isGateOn, setIsGateOn] = useState(false);
    const electronCount = 10;

    return (
        <div className="flex flex-col items-center text-center">
            <style>{`
                @keyframes flow {
                    from { left: -5%; }
                    to { left: 105%; }
                }
                @keyframes jiggle {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(1px, 0px); }
                    50% { transform: translate(0, 1px); }
                    75% { transform: translate(-1px, 0px); }
                }
                .electron {
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background: #4F46E5;
                    border-radius: 50%;
                    box-shadow: 0 0 8px #818CF8;
                    /* Default animation for blocked state */
                    animation: jiggle 1s ease-in-out infinite;
                }
                .flowing .electron {
                    /* When flowing, left is controlled by animation */
                    left: -5%; 
                    animation: flow 3s linear infinite;
                }
                .barrier {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 8px;
                    height: 120%;
                    background: rgba(239, 68, 68, 0.4);
                    box-shadow: 0 0 15px rgba(239, 68, 68, 0.7);
                    border-radius: 4px;
                    opacity: 1;
                    transition: opacity 0.5s ease;
                }
                .flowing .barrier {
                    opacity: 0;
                }
            `}</style>
            <h3 className="text-lg font-bold mb-2 text-quantum-primary">{t('semiconductorTransistor.title')}</h3>
            <p className="text-sm text-gray-400 mb-4 max-w-xl">
                {t('semiconductorTransistor.description')}
            </p>

            <div className="w-full max-w-lg h-32 bg-gray-800 rounded-lg my-4 p-4 flex items-center relative border-2 border-gray-700 overflow-hidden">
                {/* Source */}
                <div className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center font-bold z-10">S</div>
                
                {/* Channel */}
                <div className="h-4 flex-1 bg-gray-700 relative">
                    <div className={isGateOn ? 'flowing' : ''}>
                        {Array.from({ length: electronCount }).map((_, i) => {
                            let style: React.CSSProperties = {};
                            if (isGateOn) {
                                // Styles for the FLOWING state
                                style = {
                                    top: `${20 + Math.random() * 60}%`,
                                    animationDelay: `${i * 0.3}s`,
                                    animationDuration: `${(Math.random() * 1 + 2.5).toFixed(2)}s`
                                };
                            } else {
                                // Styles for the BLOCKED state
                                style = {
                                    top: `${10 + Math.random() * 80}%`,
                                    left: `${Math.random() * 20}%`,
                                    animationDelay: `${Math.random()}s`
                                };
                            }
                            return <div key={i} className="electron" style={style}></div>;
                        })}
                        <div className="barrier"></div>
                    </div>
                </div>

                {/* Drain */}
                <div className="w-16 h-16 bg-gray-700 rounded flex items-center justify-center font-bold z-10">D</div>
                
                {/* Gate */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-16 text-center z-20">
                    <div className={`h-8 w-2 mx-auto transition-colors duration-300 ${isGateOn ? 'bg-quantum-primary' : 'bg-red-500'}`}></div>
                    <div className={`p-1 rounded transition-colors duration-300 ${isGateOn ? 'bg-quantum-primary' : 'bg-red-500'}`}>
                        <span className="text-xs font-bold">GATE</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className={`font-bold transition-colors ${isGateOn ? 'text-quantum-primary' : 'text-red-400'}`}>{isGateOn ? t('semiconductorTransistor.on') : t('semiconductorTransistor.off')}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isGateOn} onChange={() => setIsGateOn(!isGateOn)} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-quantum-primary"></div>
                </label>
            </div>
        </div>
    );
};

export default SemiconductorTransistor;
