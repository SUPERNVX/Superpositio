import React, { useState } from 'react';

const ElectronMicroscope: React.FC = () => {
    const [isScanning, setIsScanning] = useState(false);
    
    // Placeholder image URL - a complex structure like a virus or molecule
    const imageUrl = 'https://images.unsplash.com/photo-1578316874999-a83a91f54d19?q=80&w=800&auto=format&fit=crop';

    return (
        <div className="flex flex-col items-center text-center">
            <style>{`
                @keyframes static-flicker {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.1; }
                }
                .static-overlay {
                    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIi8+PC9zdmc+');
                    animation: static-flicker 2s linear infinite;
                    transition: opacity 0.5s;
                    pointer-events: none;
                }
                .high-res-container {
                    clip-path: inset(0 100% 0 0); /* Start clipped from the right */
                    transition: clip-path 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .scanning .high-res-container {
                    clip-path: inset(0 0% 0 0); /* Reveal to the right */
                }
                .scan-line {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: -10px;
                    width: 3px;
                    background-color: #06B6D4; /* quantum-accent */
                    box-shadow: 0 0 15px 3px #06B6D4, 0 0 5px 1px #fff inset;
                    opacity: 0;
                    transform: translateX(0);
                    transition: transform 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.5s;
                }
                .scanning .scan-line {
                    opacity: 0.8;
                    transform: translateX(calc(100% + 20px));
                }
            `}</style>
            <h3 className="text-lg font-bold mb-2 text-purple-400">Microscopia Eletrônica</h3>
            <p className="text-sm text-gray-400 mb-4 max-w-xl">
                O comprimento de onda de um elétron é muito menor que o da luz visível. Isso permite que microscópios eletrônicos obtenham uma resolução milhares de vezes maior.
            </p>
            
            <div 
              key={isScanning.toString()} // Force re-render to restart animations
              className={`w-full max-w-md aspect-square rounded-lg my-4 relative overflow-hidden border-2 border-gray-700 ${isScanning ? 'scanning' : ''}`}
            >
                {/* Low-res background (Optical View) */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                        backgroundImage: `url(${imageUrl})`,
                        filter: 'blur(12px) brightness(0.7)',
                        transform: 'scale(1.2)'
                    }}
                ></div>
                
                {/* High-res image container (Electron View) */}
                <div className="high-res-container absolute inset-0">
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                            backgroundImage: `url(${imageUrl})`,
                        }}
                    ></div>
                </div>

                {/* Static/Noise overlay for optical view */}
                <div className={`static-overlay absolute inset-0 ${isScanning ? 'opacity-0' : 'opacity-100'}`}></div>
                
                {/* Scan line */}
                <div className="scan-line"></div>

                <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded z-10">
                    {isScanning ? 'Visão: Microscópio Eletrônico' : 'Visão: Microscópio Óptico'}
                </div>
            </div>

            <button 
                onClick={() => setIsScanning(!isScanning)}
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-6 rounded-full transition-all"
            >
                {isScanning ? 'Desativar Feixe de Elétrons' : 'Ativar Feixe de Elétrons'}
            </button>
        </div>
    );
};

export default ElectronMicroscope;