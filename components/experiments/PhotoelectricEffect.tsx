import React, { useState, useEffect, CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';

interface PhotonProps {
  id: number;
  color: string;
  onImpact: () => void;
}

interface ElectronProps {
  id: number;
  speed: number;
}

interface PhotonState {
  id: number;
}

interface ElectronState {
  id: number;
  speed: number;
}

const Photon: React.FC<PhotonProps> = ({ id, color, onImpact }) => {
    useEffect(() => {
        const timer = setTimeout(onImpact, 2000);
        return () => clearTimeout(timer);
    }, [id, onImpact]);

    return <div className="absolute top-1/2 -translate-y-1/2 w-4 h-2 rounded-full animate-photon" style={{ backgroundColor: color, filter: `blur(2px) brightness(1.5)` }}></div>;
};

const Electron: React.FC<ElectronProps> = ({ id, speed }) => {
    const angle = Math.random() * 90 - 45;
    return (
        <div
            className="absolute left-[30%] top-1/2 w-2 h-2 bg-quantum-accent rounded-full animate-electron"
            style={{
                animationDuration: `${2 / speed}s`,
                // @ts-ignore
                '--angle': `${angle}deg`
            } as CSSProperties}
        ></div>
    );
};

const PhotoelectricEffect: React.FC = () => {
    const { t } = useTranslation();
    const [frequency, setFrequency] = useState<number>(30);
    const [photons, setPhotons] = useState<PhotonState[]>([]);
    const [electrons, setElectrons] = useState<ElectronState[]>([]);
    const threshold: number = 50; // Threshold frequency to eject electrons

    useEffect(() => {
        const interval = setInterval(() => {
            setPhotons(prev => [...prev, { id: Date.now() }]);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const handleImpact = () => {
        if (frequency > threshold) {
            const speed = (frequency - threshold) / (100 - threshold) + 0.5;
            setElectrons(prev => [...prev, { id: Date.now(), speed }]);
        }
    };

    const handlePhotonEnd = (id: number) => {
        setPhotons(prev => prev.filter(p => p.id !== id));
    };

    const handleElectronEnd = (id: number) => {
        setElectrons(prev => prev.filter(e => e.id !== id));
    };

    // Corrected color calculation: Maps frequency 0-100 to hue 0-270 (Red to Violet)
    const color = `hsl(${(frequency / 100) * 270}, 100%, 60%)`;

    return (
        <div className="w-full h-full bg-gray-900/50 rounded-lg p-4 relative overflow-hidden">
            <style>{`
                @keyframes photon-travel {
                    from { right: -5%; transform: translateY(-50%) scaleX(2); }
                    to { right: 70%; transform: translateY(-50%) scaleX(1); }
                }
                .animate-photon { animation: photon-travel 2s linear forwards; }

                @keyframes electron-eject {
                    from { transform: translate(0, -50%) scale(0.5); opacity: 1; }
                    to { transform: translate(calc(100px * cos(var(--angle))), calc(100px * sin(var(--angle)))) scale(1); opacity: 0; }
                }
                .animate-electron { animation: electron-eject linear forwards; }
            `}</style>

            {/* Metal Plate */}
            <div className="absolute left-0 top-0 h-full w-[30%] bg-gray-500/30 border-r-2 border-quantum-secondary"></div>

            {/* Emitter */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-12 bg-gray-600 rounded-l-md"></div>

            {photons.map(p =>
              <Photon key={p.id} id={p.id} color={color} onImpact={() => { handleImpact(); handlePhotonEnd(p.id); }} />
            )}
            {electrons.map(e =>
              <Electron key={e.id} id={e.id} speed={e.speed} />
            )}

            {/* Controls */}
            <div className="absolute bottom-4 left-4 right-4">
                <label className="text-sm font-bold text-white">{t('photoelectricEffect.frequency')}</label>
                <div className="flex items-center gap-4">
                    <span className="text-red-400">{t('photoelectricEffect.low')}</span>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={frequency}
                        onChange={(e) => setFrequency(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                        style={{'--thumb-color': color} as CSSProperties}
                    />
                    <span className="text-violet-400">{t('photoelectricEffect.high')}</span>
                </div>
            </div>
        </div>
    );
};

export default PhotoelectricEffect;