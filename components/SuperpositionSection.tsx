
import React from 'react';
import SchrodingersCat from './experiments/SchrodingersCat';

const SuperpositionSection: React.FC = () => {
    return (
        <section id="superposicao" data-observe className="py-20 bg-gradient-to-br from-quantum-dark to-gray-900 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Superposição e o Gato de <span className="text-quantum-primary">Schrödinger</span></h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">Um sistema quântico pode estar em múltiplos estados ao mesmo tempo — até que seja medido.</p>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto mt-4"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-800 rounded-2xl p-8 border border-quantum-secondary/20 h-full">
                        <h3 className="text-2xl font-bold mb-6 text-quantum-secondary">O Paradoxo Quântico</h3>
                        <p className="text-gray-300 mb-4">
                            A superposição é um princípio fundamental da mecânica quântica. Ele afirma que, assim como as ondas podem se sobrepor, uma partícula quântica (como um elétron) pode existir em uma combinação de todos os seus estados possíveis simultaneamente.
                        </p>
                        <p className="text-gray-300 mb-4">
                           Para ilustrar o quão estranho este conceito seria no nosso mundo macroscópico, Erwin Schrödinger propôs um famoso experimento mental em 1935.
                        </p>
                        <p className="text-gray-400">
                           Dentro de uma caixa selada, um gato está junto a um frasco de veneno que pode ser liberado por um átomo radioativo. Se o átomo decai (um evento quântico), o veneno é liberado. Como o átomo está em uma superposição de "decaído" e "não decaído", o gato, por consequência, estaria na bizarra superposição de "vivo" e "morto" até que a caixa seja aberta e o sistema observado.
                        </p>
                    </div>

                    <div className="flex justify-center items-center">
                       <SchrodingersCat />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuperpositionSection;
