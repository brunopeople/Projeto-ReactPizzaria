import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from '../src/Componentes/Hero';
import Produtos from '../src/Componentes/Produtos';
import { productData, productDataTwo } from '../src/Componentes/Produtos/dataAPI';
import Feature from '../src/Componentes/Feature';
import Footer from '../src/Componentes/Footer';

function App() {
    return (

        <Router>
            <GlobalStyle />
            <Hero />
            <Produtos heading='Escolha o seu favorito' data={productData} />
            <Feature />
            <Produtos heading='Doces para o seu Gosto' data={productDataTwo} />
            <Footer />
        </Router>
    );

}

export default App;