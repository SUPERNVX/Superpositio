import React, { useState, useEffect, useRef } from 'react';

interface Hit {
  id: number;
  left: string;
  top: string;
}

// A simple psuedo-random number generator for deterministic results
const pRNG = (seed: number) => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
let rand = pRNG(3);

const WaveAnimation: React.FC = () => {
    const waveCount = 5; // Number of wave lines in the train for each source

    return (
        <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <defs>
                {/* This clip path will hide the parts of the secondary waves behind the barrier */}
                <clipPath id="clipPathForSecondaryWaves">
                    <rect x="20%" y="0" width="80%" height="100%" />
                </clipPath>
            </defs>
            <style>{`
                .primary-wave, .secondary-wave {
                    fill: none;
                    stroke: #06B6D4; /* quantum-accent */
                    stroke-width: 1;
                    opacity: 0;
                    transform-origin: center;
                }

                @keyframes propagate-primary {
                    0% {
                        r: 0;
                        opacity: 0.8;
                    }
                    100% {
                        r: 15%; /* Propagate up to the slits */
                        opacity: 0;
                    }
                }
                
                @keyframes propagate-secondary {
                     0% {
                        r: 0;
                        opacity: 0.7;
                    }
                    100% {
                        r: 80%; /* Propagate across the screen */
                        opacity: 0;
                    }
                }
                
                @keyframes plane-wave {
                    0% {
                        opacity: 0;
                        transform: translateX(-10%);
                    }
                    50% {
                        opacity: 0.8;
                    }
                    100% {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                }

                .primary-wave {
                    animation: propagate-primary 1s linear infinite;
                }
                .secondary-wave {
                    animation: propagate-secondary 2s linear infinite;
                }
                
                .wave-line {
                    stroke-dasharray: 2, 4;
                }
            `}</style>
            
            {/* Primary plane waves approaching the slits */}
            {Array.from({ length: 15 }).map((_, i) => (
                <line
                    key={`plane-wave-${i}`}
                    x1="0%"
                    y1={`${15 + i * 5}%`}
                    x2="20%"
                    y2={`${15 + i * 5}%`}
                    stroke="#06B6D4"
                    strokeWidth="1"
                    opacity="0.6"
                    className="wave-line"
                    style={{
                        animation: `plane-wave 2s linear infinite`,
                        animationDelay: `${i * 0.1}s`,
                    }}
                />
            ))}

            {/* Secondary wavelets from slits, clipped */}
            <g clipPath="url(#clipPathForSecondaryWaves)">
                {/* Wavelets from top slit */}
                {Array.from({ length: waveCount }).map((_, i) => (
                    <circle
                        key={`top-slit-${i}`}
                        className="secondary-wave"
                        cx="20%"
                        cy="40%"
                        r="0"
                        style={{ animationDelay: `${0.25 + i * 0.4}s` }}
                    />
                ))}
                
                {/* Wavelets from bottom slit */}
                {Array.from({ length: waveCount }).map((_, i) => (
                    <circle
                        key={`bottom-slit-${i}`}
                        className="secondary-wave"
                        cx="20%"
                        cy="60%"
                        r="0"
                        style={{ animationDelay: `${0.25 + i * 0.4}s` }}
                    />
                ))}
            </g>
        </svg>
    );
};


const ParticleAnimation: React.FC = () => (
    <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
        {/* A particle going through the top slit */}
        <div className="particle" style={{ animationName: 'particle-travel-top' }}></div>
        {/* A particle going through the bottom slit, delayed */}
        <div className="particle" style={{ animationName: 'particle-travel-bottom', animationDelay: '1.5s' }}></div>
    </div>
);


const DoubleSlitExperiment: React.FC = () => {
    const [isObserved, setIsObserved] = useState<boolean>(false);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [hits, setHits] = useState<Hit[]>([]);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const resetSimulation = () => {
        rand = pRNG(3); // Reset seed
        setHits([]);
    };
    
    useEffect(() => {
        if (isRunning) {
            resetSimulation();
            intervalRef.current = setInterval(() => {
                setHits(prevHits => {
                    if (prevHits.length >= 500) {
                        clearInterval(intervalRef.current!);
                        setIsRunning(false);
                        return prevHits;
                    }
                    
                    const screenWidth = 100;
                    const slit1 = screenWidth * 0.4;
                    const slit2 = screenWidth * 0.6;
                    let position: number;

                    if (isObserved) {
                        // Particle behavior: Two distinct clumps
                        const base = rand() > 0.5 ? slit1 : slit2;
                        const spread = (rand() - 0.5) * 15;
                        position = base + spread;
                    } else {
                        // Wave behavior: Interference pattern
                        const interferencePattern = (pos: number) => Math.cos( (pos - screenWidth / 2) * 0.5 ) ** 2;
                        
                        let p, x;
                        do {
                           x = rand() * screenWidth;
                           p = rand() * 1;
                        } while(p > interferencePattern(x));
                        position = x;
                    }

                    return [...prevHits, {
                        id: prevHits.length,
                        left: `${position}%`,
                        top: `${rand() * 90 + 5}%`
                    }];
                });
            }, 20);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isRunning, isObserved]);

    useEffect(() => {
        if (isRunning) { // If running, restart with new setting
            setIsRunning(false);
            setTimeout(() => setIsRunning(true), 50);
        } else { // if not running, just clear the screen
             resetSimulation();
        }
    }, [isObserved]);


    return (
        <div className="w-full bg-gray-900/50 rounded-lg p-4 relative">
            <style>{`
                @keyframes particle-travel-top {
                    0% { opacity: 0; transform: translate(0, 0); }
                    10% { opacity: 1; transform: translate(0, 0); }
                    50% { transform: translate(65px, -25px); }
                    90% { opacity: 1; transform: translate(240px, -40px); }
                    100% { opacity: 0; transform: translate(240px, -40px); }
                }
                @keyframes particle-travel-bottom {
                    0% { opacity: 0; transform: translate(0, 0); }
                    10% { opacity: 1; transform: translate(0, 0); }
                    50% { transform: translate(65px, 25px); }
                    90% { opacity: 1; transform: translate(240px, 40px); }
                    100% { opacity: 0; transform: translate(240px, 40px); }
                }
                .particle {
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    width: 8px;
                    height: 8px;
                    background-color: #4F46E5;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #4F46E5, 0 0 15px #4F46E5;
                    animation-duration: 3s;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                    opacity: 0;
                }
            `}</style>
             <div className="flex flex-col md:flex-row gap-4">
                {/* Simulation Area */}
                <div className="flex-grow h-64 md:h-80 relative flex items-center">
                    {/* Emitter */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-10 bg-quantum-primary rounded-r-full z-10"></div>
                    
                    {/* Slit Plate */}
                    <div className="absolute left-[20%] top-0 h-full w-2 bg-gray-500 rounded-full z-10">
                        <div className="absolute top-[35%] h-[10%] w-full bg-gray-900/50"></div>
                        <div className="absolute top-[55%] h-[10%] w-full bg-gray-900/50"></div>
                    </div>

                    {/* ANIMATION OVERLAY */}
                    {isRunning && !isObserved && <WaveAnimation />}
                    {isRunning && isObserved && <ParticleAnimation />}
                    
                    {/* Observer Eye */}
                    <i 
                       className={`fas fa-eye absolute left-[20%] top-[20%] text-2xl text-quantum-accent transition-opacity duration-500 z-10 ${isObserved ? 'opacity-100' : 'opacity-0'}`}
                       style={{ transform: 'translateX(20px)'}}
                    ></i>

                    {/* Detector Screen */}
                    <div className="absolute right-0 top-0 h-full w-[65%] bg-gray-700/50 rounded-lg overflow-hidden">
                        {hits.map(hit => (
                            <div key={hit.id} className="absolute w-1 h-1 bg-quantum-accent rounded-full" style={{ left: hit.left, top: hit.top, boxShadow: '0 0 5px #06B6D4' }}></div>
                        ))}
                    </div>
                </div>

                {/* Controls & Explanation */}
                <div className="w-full md:w-64 flex-shrink-0 p-4 bg-gray-800 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Controles</h4>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-300">Observador</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={isObserved} onChange={() => setIsObserved(!isObserved)} className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-quantum-primary"></div>
                        </label>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setIsRunning(true)} disabled={isRunning} className="w-full bg-quantum-accent hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded-full transition-all disabled:bg-gray-500">
                           {isRunning ? 'Rodando...' : 'Iniciar'}
                        </button>
                        <button onClick={() => { setIsRunning(false); resetSimulation(); }} className="w-full bg-quantum-secondary hover:bg-indigo-400 text-white font-bold py-2 px-4 rounded-full transition-all">
                            Resetar
                        </button>
                    </div>
                    <hr className="my-4 border-gray-600"/>
                    <div className="text-sm">
                        <h5 className={`font-bold transition-colors ${!isObserved ? 'text-quantum-accent' : 'text-gray-500'}`}>Comportamento Ondulatório</h5>
                        <p className={`text-xs transition-colors mb-2 ${!isObserved ? 'text-gray-300' : 'text-gray-500'}`}>Sem observador, os elétrons criam um padrão de interferência, agindo como ondas.</p>
                        
                        <h5 className={`font-bold transition-colors ${isObserved ? 'text-quantum-primary' : 'text-gray-500'}`}>Comportamento Particulado</h5>
                        <p className={`text-xs transition-colors ${isObserved ? 'text-gray-300' : 'text-gray-500'}`}>Com um observador, o padrão some. Os elétrons agem como partículas, formando duas linhas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoubleSlitExperiment;