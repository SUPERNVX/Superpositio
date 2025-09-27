import React, { useState, useEffect } from 'react';

const ElectronDiffraction: React.FC = () => {
    const [isFiring, setIsFiring] = useState(false);
    const [showPattern, setShowPattern] = useState(false);

    useEffect(() => {
        // FIX: Use ReturnType<typeof setTimeout> for browser compatibility instead of NodeJS.Timeout.
        let beamTimer: ReturnType<typeof setTimeout>;
        let patternTimer: ReturnType<typeof setTimeout>;

        if (isFiring) {
            setShowPattern(false);
            beamTimer = setTimeout(() => {
                 setShowPattern(true);
            }, 1000);
            patternTimer = setTimeout(() => {
                setIsFiring(false);
            }, 3000);
        }

        return () => {
            clearTimeout(beamTimer);
            clearTimeout(patternTimer);
        };
    }, [isFiring]);

    const patternPoints = [
      { top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 1 },
      { top: '50%', left: 'calc(50% - 30px)', transform: 'translate(-50%, -50%)', opacity: 0.8 },
      { top: '50%', left: 'calc(50% + 30px)', transform: 'translate(-50%, -50%)', opacity: 0.8 },
      { top: 'calc(50% - 30px)', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.8 },
      { top: 'calc(50% + 30px)', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.8 },
      { top: 'calc(50% - 21px)', left: 'calc(50% - 21px)', transform: 'translate(-50%, -50%)', opacity: 0.6 },
      { top: 'calc(50% - 21px)', left: 'calc(50% + 21px)', transform: 'translate(-50%, -50%)', opacity: 0.6 },
      { top: 'calc(50% + 21px)', left: 'calc(50% - 21px)', transform: 'translate(-50%, -50%)', opacity: 0.6 },
      { top: 'calc(50% + 21px)', left: 'calc(50% + 21px)', transform: 'translate(-50%, -50%)', opacity: 0.6 },
    ];


    return (
        <div className="w-full h-full bg-gray-900/50 rounded-lg p-4 relative overflow-hidden flex items-center">
            {/* FIX: Replaced tailwind config variables with hardcoded hex values as the 'tailwind' object is not available in this scope. */}
            <style>{`
                @keyframes fire-beam {
                    from { width: 0%; }
                    to { width: 45%; }
                }
                .animate-beam { animation: fire-beam 1s ease-out forwards; }

                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
                
                .pattern-dot {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background-color: #06b6d4;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #06b6d4;
                    transition: opacity 0.5s;
                }
            `}</style>
            
            {/* Electron Gun */}
            <div className="w-6 h-6 bg-quantum-primary rounded-full z-10"></div>
            
            {/* Crystal Lattice */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 grid grid-cols-3 gap-1 z-10">
                {Array(9).fill(0).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-quantum-secondary/50 rounded-full"></div>
                ))}
            </div>

            {/* Detector Screen */}
            <div className="absolute right-0 top-0 h-full w-[30%] bg-gray-700/50 border-l-2 border-quantum-accent">
                {/* Diffraction Pattern */}
                <div className="w-full h-full relative">
                    {patternPoints.map((style, i) => (
                        <div 
                            key={i} 
                            className="pattern-dot"
                            style={{...style, opacity: showPattern ? style.opacity : 0}}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Electron Beam */}
            {isFiring && (
                // FIX: Replaced tailwind config variable with a hardcoded hex value.
                <div className="absolute left-3 top-1/2 h-1 bg-quantum-primary/80 -translate-y-1/2 animate-beam rounded-full" style={{boxShadow: `0 0 10px #6366f1`}}></div>
            )}
            
            {/* Button */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <button 
                    onClick={() => setIsFiring(true)}
                    disabled={isFiring}
                    className="bg-quantum-accent hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                    {isFiring ? 'Disparando...' : 'Disparar Elétrons'}
                </button>
            </div>
        </div>
    );
};

export default ElectronDiffraction;