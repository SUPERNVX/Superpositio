import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import ExperimentCard from '../components/ui/ExperimentCard';
import PhotoelectricEffect from './experiments/PhotoelectricEffect';
import ElectronDiffraction from './experiments/ElectronDiffraction';
import DoubleSlitExperiment from './experiments/DoubleSlitExperiment';

const ExperimentsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="experimentos" data-observe className="py-20 bg-gradient-to-br from-quantum-dark to-gray-900 opacity-0 translate-y-10 transition-all">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <Trans i18nKey="sections.experiments.title" components={{ 0: <span className="text-quantum-primary">Fundamentais</span> }} />
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">{t('experimentsSection.description')}</p>
                    <div className="w-20 h-1 bg-quantum-primary mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Experimento 1: Efeito Fotoelétrico */}
                    <ExperimentCard
                        title={t('experimentsSection.photoelectric.title')}
                        description={t('experimentsSection.photoelectric.description')}
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
                        title={t('experimentsSection.electronDiffraction.title')}
                        description={t('experimentsSection.electronDiffraction.description')}
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
                        title={t('experimentsSection.doubleSlit.title')}
                        description={t('experimentsSection.doubleSlit.description')}
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
