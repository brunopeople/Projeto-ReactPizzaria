import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>A Pizza do Dia!</h1>
            <p> Molho de Tufra regado de p� de ouro de 24 quilates</p>
            <FeatureButton>Pe�a Agora!</FeatureButton>
        </FeatureContainer>
    );
};

export default Feature;