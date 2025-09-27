import React, { useState } from 'react';

const LightWaveExperiment: React.FC = () => {
    const [activePhenomenon, setActivePhenomenon] = useState<'refraction' | 'diffraction' | 'polarization'>('refraction');
    
    const renderExperiment = () => {
        switch(activePhenomenon) {
            case 'refraction':
                return (
                    <div className="w-full h-64 flex items-center justify-center relative">
                        <svg width="100%" height="100%" viewBox="0 0 500 250" className="overflow-visible">
                            {/* Air medium (top) */}
                            <rect x="0" y="0" width="500" height="125" fill="#111827" />
                            <text x="10" y="20" fill="#9ca3af" fontSize="12">Ar (n=1.0)</text>
                            
                            {/* Boundary line */}
                            <line x1="0" y1="125" x2="500" y2="125" stroke="#4b5563" strokeWidth="1" strokeDasharray="5,5" />
                            
                            {/* Glass medium (bottom) */}
                            <rect x="0" y="125" width="500" height="125" fill="#1f2937" />
                            <text x="10" y="145" fill="#9ca3af" fontSize="12">Vidro (n=1.5)</text>
                            
                            {/* Incident ray */}
                            <line x1="100" y1="60" x2="175" y2="125" stroke="rgb(6, 182, 212)" strokeWidth="2" />
                            <polygon points="175,125 165,122 168,130" fill="rgb(6, 182, 212)" />
                            
                            {/* Refracted ray */}
                            <line x1="175" y1="125" x2="275" y2="190" stroke="rgb(139, 92, 246)" strokeWidth="2" />
                            <polygon points="275,190 265,187 268,195" fill="rgb(139, 92, 246)" />
                            
                            {/* Normal line */}
                            <line x1="175" y1="60" x2="175" y2="190" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3" />
                            
                            {/* Angles */}
                            <path d="M175,90 A30,30 0 0,1 200,125" fill="none" stroke="#fbbf24" strokeWidth="1" />
                            <text x="205" y="115" fill="#fbbf24" fontSize="12">θᵢ</text>
                            
                            <path d="M175,155 A30,30 0 0,1 200,190" fill="none" stroke="#fbbf24" strokeWidth="1" />
                            <text x="205" y="180" fill="#fbbf24" fontSize="12">θᵣ</text>
                            
                            {/* Labels */}
                            <text x="110" y="40" fill="rgb(6, 182, 212)" fontSize="12">Raio incidente</text>
                            <text x="280" y="170" fill="rgb(139, 92, 246)" fontSize="12">Raio refratado</text>
                        </svg>
                    </div>
                );
                
            case 'diffraction':
                return (
                    <div className="w-full h-64 flex items-center justify-center relative">
                        <svg width="100%" height="100%" viewBox="0 0 500 250" className="overflow-visible">
                            {/* Light source */}
                            <line x1="0" y1="125" x2="80" y2="125" stroke="rgb(6, 182, 212)" strokeWidth="2" strokeDasharray="5,5" />
                            
                            {/* Barrier with single slit */}
                            <rect x="100" y="50" width="20" height="150" fill="#1f2937" />
                            <rect x="105" y="120" width="10" height="10" fill="#111827" /> {/* Central slit */}
                            
                            {/* Diffracted waves */}
                            <path d="M110,125 Q200,60 300,125 T450,125" fill="none" stroke="rgb(139, 92, 246)" strokeWidth="1" strokeOpacity="0.8">
                                <animate attributeName="d" values="
                                    M110,125 Q200,60 300,125 T450,125;
                                    M110,125 Q200,100 300,125 T450,125;
                                    M110,125 Q200,140 300,125 T450,125;
                                    M110,125 Q200,100 300,125 T450,125;
                                    M110,125 Q200,60 300,125 T450,125
                                " dur="2s" repeatCount="indefinite" />
                            </path>
                            <path d="M110,125 Q200,190 300,125 T450,125" fill="none" stroke="rgb(139, 92, 246)" strokeWidth="1" strokeOpacity="0.6">
                                <animate attributeName="d" values="
                                    M110,125 Q200,190 300,125 T450,125;
                                    M110,125 Q200,150 300,125 T450,125;
                                    M110,125 Q200,110 300,125 T450,125;
                                    M110,125 Q200,150 300,125 T450,125;
                                    M110,125 Q200,190 300,125 T450,125
                                " dur="2s" begin="0.5s" repeatCount="indefinite" />
                            </path>
                            
                            {/* Diffraction pattern on screen */}
                            <rect x="450" y="50" width="2" height="150" fill="#1f2937" />
                            <g>
                                {/* Central maximum */}
                                <rect x="455" y="115" width="25" height="20" fill="rgb(139, 92, 246)" opacity="0.9" />
                                {/* First order maxima */}
                                <rect x="455" y="80" width="15" height="10" fill="rgb(139, 92, 246)" opacity="0.6" />
                                <rect x="455" y="160" width="15" height="10" fill="rgb(139, 92, 246)" opacity="0.6" />
                                {/* Second order maxima */}
                                <rect x="455" y="55" width="10" height="5" fill="rgb(139, 92, 246)" opacity="0.4" />
                                <rect x="455" y="190" width="10" height="5" fill="rgb(139, 92, 246)" opacity="0.4" />
                            </g>
                            
                            {/* Labels */}
                            <text x="20" y="120" fill="rgb(6, 182, 212)" fontSize="12" fillOpacity="0.8">Luz</text>
                            <text x="110" y="40" fill="rgb(139, 92, 246)" fontSize="12" fillOpacity="0.8">Fenda simples</text>
                            <text x="420" y="40" fill="rgb(139, 92, 246)" fontSize="12" fillOpacity="0.8">Padrão de difração</text>
                        </svg>
                    </div>
                );
                
            case 'polarization':
                return (
                    <div className="w-full h-64 flex items-center justify-center relative">
                        <svg width="100%" height="100%" viewBox="0 0 500 250" className="overflow-visible">
                            {/* Light source with unpolarized light (multiple orientations) */}
                            <g>
                                {/* Horizontal oscillation */}
                                <line x1="50" y1="100" x2="150" y2="100" stroke="rgb(6, 182, 212)" strokeWidth="1" />
                                <animateTransform 
                                    attributeName="transform" 
                                    type="translate" 
                                    values="0,0; 0,0; 0,0;" 
                                    dur="1s" 
                                    repeatCount="indefinite" />
                                <g>
                                    <animateTransform 
                                        attributeName="transform" 
                                        type="translate" 
                                        values="0,0; 0,-5; 0,0; 0,5; 0,0;" 
                                        dur="1s" 
                                        repeatCount="indefinite" />
                                    <circle cx="70" cy="100" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="90" cy="100" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="110" cy="100" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="130" cy="100" r="2" fill="rgb(6, 182, 212)" />
                                </g>
                                
                                {/* Vertical oscillation */}
                                <line x1="50" y1="150" x2="150" y2="150" stroke="rgb(6, 182, 212)" strokeWidth="1" />
                                <animateTransform 
                                    attributeName="transform" 
                                    type="translate" 
                                    values="0,0; 0,0; 0,0;" 
                                    dur="1s" 
                                    repeatCount="indefinite" />
                                <g>
                                    <animateTransform 
                                        attributeName="transform" 
                                        type="translate" 
                                        values="0,0; -5,0; 0,0; 5,0; 0,0;" 
                                        dur="1s" 
                                        repeatCount="indefinite" />
                                    <circle cx="50" cy="130" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="50" cy="135" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="50" cy="140" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="50" cy="145" r="2" fill="rgb(6, 182, 212)" />
                                </g>
                                
                                {/* Diagonal oscillation */}
                                <line x1="50" y1="200" x2="150" y2="200" stroke="rgb(6, 182, 212)" strokeWidth="1" />
                                <animateTransform 
                                    attributeName="transform" 
                                    type="translate" 
                                    values="0,0; 0,0; 0,0;" 
                                    dur="1s" 
                                    repeatCount="indefinite" />
                                <g>
                                    <animateTransform 
                                        attributeName="transform" 
                                        type="translate" 
                                        values="0,0; -3,-3; 0,0; 3,3; 0,0;" 
                                        dur="1s" 
                                        repeatCount="indefinite" />
                                    <circle cx="60" cy="190" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="70" cy="185" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="80" cy="180" r="2" fill="rgb(6, 182, 212)" />
                                    <circle cx="90" cy="175" r="2" fill="rgb(6, 182, 212)" />
                                </g>
                            </g>
                            
                            {/* Polarizer (vertical lines) */}
                            <rect x="170" y="50" width="10" height="150" fill="#1f2937" />
                            <line x1="175" y1="70" x2="175" y2="200" stroke="#4b5563" strokeWidth="1" strokeDasharray="2,3" />
                            <text x="175" y="40" fill="#9ca3af" fontSize="12" textAnchor="middle">Polarizador</text>
                            
                            {/* Polarized light after polarizer (only horizontal oscillations) */}
                            <g>
                                <line x1="220" y1="125" x2="450" y2="125" stroke="rgb(139, 92, 246)" strokeWidth="1" />
                                <g>
                                    <animateTransform 
                                        attributeName="transform" 
                                        type="translate" 
                                        values="0,0; 0,-5; 0,0; 0,5; 0,0;" 
                                        dur="1s" 
                                        repeatCount="indefinite" />
                                    <circle cx="250" cy="125" r="2" fill="rgb(139, 92, 246)" />
                                    <circle cx="300" cy="125" r="2" fill="rgb(139, 92, 246)" />
                                    <circle cx="350" cy="125" r="2" fill="rgb(139, 92, 246)" />
                                    <circle cx="400" cy="125" r="2" fill="rgb(139, 92, 246)" />
                                </g>
                                <text x="330" y="90" fill="rgb(139, 92, 246)" fontSize="12" textAnchor="middle">Luz polarizada</text>
                            </g>
                            
                            {/* Labels */}
                            <text x="100" y="70" fill="rgb(6, 182, 212)" fontSize="12" textAnchor="middle">Luz não polarizada</text>
                        </svg>
                    </div>
                );
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
                <button
                    onClick={() => setActivePhenomenon('refraction')}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                        activePhenomenon === 'refraction'
                            ? 'bg-quantum-primary border-quantum-primary text-white shadow-lg shadow-blue-500/20'
                            : 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300'
                    }`}
                >
                    Refração
                </button>
                <button
                    onClick={() => setActivePhenomenon('diffraction')}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                        activePhenomenon === 'diffraction'
                            ? 'bg-quantum-accent border-quantum-accent text-white shadow-lg shadow-cyan-500/20'
                            : 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300'
                    }`}
                >
                    Difração
                </button>
                <button
                    onClick={() => setActivePhenomenon('polarization')}
                    className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                        activePhenomenon === 'polarization'
                            ? 'bg-purple-500 border-purple-500 text-white shadow-lg shadow-purple-500/20'
                            : 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-gray-300'
                    }`}
                >
                    Polarização
                </button>
            </div>
            
            <div className="bg-gray-900/50 rounded-2xl p-4 border border-quantum-secondary/20 min-h-[260px] flex items-center justify-center">
                {renderExperiment()}
            </div>
        </div>
    );
};

export default LightWaveExperiment;