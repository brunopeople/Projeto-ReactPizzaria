import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
} from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1> As Melhores Pizzas de Sempre</HeroH1>
                    <HeroP>Pronta em 60 Segundos</HeroP>
                    <HeroBtn>Faça seu Pedido</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    );
};

export default Hero;