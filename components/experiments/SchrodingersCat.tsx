import React, { useState, useRef, useEffect } from 'react';

const SchrodingersCat: React.FC = () => {
    const [state, setState] = useState<'idle' | 'observing' | 'alive' | 'dead'>('idle');
    const [resultText, setResultText] = useState<'Vivo E Morto' | 'Vivo!' | 'Morto...'>('Vivo E Morto');
    const [resultIcon, setResultIcon] = useState<string>('fa-cat text-green-400');

    // 3D Rotation State
    const [rotation, setRotation] = useState({ x: -20, y: 30 });
    const [isDragging, setIsDragging] = useState(false);
    const lastMousePosRef = useRef({ x: 0, y: 0 });

    const observe = () => {
        if (state !== 'idle') return;
        setState('observing');
        setResultText('...' as any);

        setTimeout(() => {
            if (Math.random() < 0.5) {
                setState('alive');
                setResultText('Vivo!');
                setResultIcon('fa-cat text-green-400');
            } else {
                setState('dead');
                setResultText('Morto...');
                setResultIcon('fa-skull-crossbones text-red-400');
            }
        }, 1500);
    };

    const reset = () => {
        setState('idle');
        setResultText('Vivo E Morto');
    };
    
    // --- 3D Drag Logic ---
    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button !== 0) return;
        setIsDragging(true);
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };
        document.body.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = 'default';
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - lastMousePosRef.current.x;
        const deltaY = e.clientY - lastMousePosRef.current.y;
        lastMousePosRef.current = { x: e.clientX, y: e.clientY };

        setRotation(prev => ({
            x: Math.max(-90, Math.min(90, prev.x - deltaY * 0.5)),
            y: prev.y + deltaX * 0.5,
        }));
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);


    const isBoxOpen = state === 'alive' || state === 'dead';

    return (
        <div className="w-full max-w-lg mx-auto flex flex-col items-center justify-center bg-gray-800 rounded-2xl p-6 border border-purple-500/20 text-center">
            <style>{`
                :root {
                  --box-w: 150px;
                  --box-h: 100px;
                  --box-d: 150px;
                }
                .scene {
                    width: var(--box-w);
                    height: var(--box-h);
                    perspective: 1200px;
                    cursor: grab;
                    margin: 40px 0;
                }
                .scene:active {
                    cursor: grabbing;
                }

                .box {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform-style: preserve-3d;
                    transition: transform 0.1s linear;
                }

                .box-face {
                    position: absolute;
                    background-color: rgba(55, 65, 81, 1);
                    border: 1px solid #1f2937;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), opacity 1.5s;
                }

                .front, .back { width: var(--box-w); height: var(--box-h); }
                .left, .right { width: var(--box-d); height: var(--box-h); left: calc( (var(--box-w) - var(--box-d)) / 2 ); }
                .top, .bottom { width: var(--box-w); height: var(--box-d); top: calc( (var(--box-h) - var(--box-d)) / 2 ); }
                
                /* Closed State Transforms */
                .closed .front  { transform: translateZ(calc(var(--box-d) / 2)); }
                .closed .back   { transform: rotateY(180deg) translateZ(calc(var(--box-d) / 2)); }
                .closed .left   { transform: rotateY(-90deg) translateZ(calc(var(--box-w) / 2)); }
                .closed .right  { transform: rotateY(90deg) translateZ(calc(var(--box-w) / 2)); }
                .closed .top    { transform: rotateX(90deg) translateZ(calc(var(--box-h) / 2)); }
                .closed .bottom { transform: rotateX(-90deg) translateZ(calc(var(--box-h) / 2)); }

                /* Open State Transforms */
                .open .front  { transform: translateZ(calc(var(--box-d) / 2 + 80px)); opacity: 0; }
                .open .top    { transform: rotateX(90deg) translateZ(calc(var(--box-h) / 2 + 80px)); opacity: 0; }
                .open .back   { transform: rotateY(180deg) translateZ(calc(var(--box-d) / 2)); }
                .open .left   { transform: rotateY(-90deg) translateZ(calc(var(--box-w) / 2)); }
                .open .right  { transform: rotateY(90deg) translateZ(calc(var(--box-w) / 2)); }
                .open .bottom { transform: rotateX(-90deg) translateZ(calc(var(--box-h) / 2)); }
                
                /* Styling & Details */
                .box-face {
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
                }
                .bottom {
                     background-image:
                        linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                .closed-icon { transition: opacity 0.5s; opacity: ${!isBoxOpen ? '1' : '0'}; }
                .open-content { transition: opacity 0.5s 1s; opacity: ${isBoxOpen ? '1' : '0'}; }

                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 20px #a78bfa, 0 0 35px #a78bfa; }
                    50% { box-shadow: 0 0 40px #c4b5fd, 0 0 60px #c4b5fd; }
                }
                .scene-wrapper.pulsing { animation: pulse-glow 3s infinite ease-in-out; }
                .experiment-detail { position: absolute; text-align: center; color: #9ca3af; }
            `}</style>
            <h3 className="text-xl font-bold mb-1">Estado do Gato: <span className="text-purple-400">{resultText}</span></h3>
            <p className="text-xs text-gray-400 mb-2">Arraste a caixa para girar.</p>

            <div className="h-80 w-full flex items-center justify-center">
                <div className={`scene-wrapper rounded-full ${state === 'idle' ? 'pulsing' : ''}`}>
                    <div className="scene" onMouseDown={handleMouseDown}>
                        <div
                          className={`box ${isBoxOpen ? 'open' : 'closed'}`}
                          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
                        >
                            <div className="box-face front">
                                <div className="closed-icon">
                                     <i className={`fas ${state === 'idle' ? 'fa-question' : 'fa-spinner fa-spin'} text-4xl text-purple-300`}></i>
                                </div>
                            </div>
                            <div className="box-face back"></div>
                            <div className="box-face left"></div>
                            <div className="box-face right"></div>
                            <div className="box-face top"></div>
                            <div className="box-face bottom">
                                <div
                                    className="open-content w-full h-full relative"
                                    style={{ transformStyle: 'preserve-3d', transform: 'rotateX(180deg)' }}
                                >
                                    <div className="experiment-detail" style={{top: '10px', right: '10px'}}>
                                        <i className="fas fa-radiation text-xl text-yellow-300"></i>
                                        <p className="text-[8px]">Átomo</p>
                                    </div>
                                     <div className="experiment-detail" style={{top: '10px', left: '10px'}}>
                                        <i className="fas fa-vial text-xl text-red-400"></i>
                                        <p className="text-[8px]">Veneno</p>
                                    </div>
                                    <div className="experiment-detail" style={{bottom: '10px', left: '0px', right: '0px' }}>
                                        <i className="fas fa-hammer text-xl text-gray-400"></i>
                                        <p className="text-[8px]">Mecanismo</p>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <i className={`fas ${resultIcon} text-6xl`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={observe}
                    disabled={state !== 'idle'}
                    className="bg-quantum-primary hover:bg-quantum-secondary text-white font-bold py-2 px-6 rounded-full transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                    <i className="fas fa-eye mr-2"></i> Observar
                </button>
                <button
                    onClick={reset}
                    disabled={state === 'observing'}
                    className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 disabled:opacity-50"
                >
                    Resetar
                </button>
            </div>
        </div>
    );
};

export default SchrodingersCat;