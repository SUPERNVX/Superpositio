import React from 'react';
import ExperimentCard from '../components/ui/ExperimentCard';
import PhotoelectricEffect from './experiments/PhotoelectricEffect';
import ElectronDiffraction from './experiments/ElectronDiffraction';
import DoubleSlitExperiment from './experiments/DoubleSlitExperiment';

const ExperimentsSection: React.FC = () => {
    return (
        <section id="experimentos" data-observe className="py-20 bg-gradient-to-br from-quantum-dark to-gray-900 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimentos <span className="text-quantum-primary">Fundamentais</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Experimentos clássicos que demonstram a dualidade onda-partícula do elétron</p>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto mt-4"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Experimento 1: Efeito Fotoelétrico */}
                    <ExperimentCard 
                        title="Efeito Fotoelétrico"
                        description="Demonstração de que a luz se comporta como partícula (fótons) ao ejetar elétrons de uma superfície metálica. Altere a frequência da luz para ver o resultado."
                        icon="fas fa-microscope"
                        iconColor="text-quantum-primary"
                        className="flex flex-col h-full"
                    >
                        <div className="h-64">
                           <PhotoelectricEffect />
                        </div>
                    </ExperimentCard>
                    
                    {/* Experimento 2: Difração de Elétrons */}
                    <ExperimentCard 
                        title="Difração de Elétrons"
                        description="Experimento de Davisson-Germer mostrando que feixes de elétrons produzem padrões de difração como ondas ao passar por um cristal."
                        icon="fas fa-wave-square"
                        iconColor="text-quantum-accent"
                        className="flex flex-col h-full"
                    >
                        <div className="h-64">
                            <ElectronDiffraction />
                        </div>
                    </ExperimentCard>
                    
                    {/* Experimento 3: Fenda Dupla */}
                    <ExperimentCard 
                        title="Experimento da Dupla Fenda"
                        description="Quando elétrons passam por duas fendas, criam um padrão de interferência (onda). Mas ao observá-los, o padrão desaparece e eles agem como partículas. Use o interruptor para ver a mudança."
                        icon="fas fa-atom"
                        iconColor="text-purple-500"
                        className="lg:col-span-2"
                    >
                       <DoubleSlitExperiment />
                    </ExperimentCard>
                </div>
            </div>
        </section>
    );
};

export default ExperimentsSection;
