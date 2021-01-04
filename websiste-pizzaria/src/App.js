import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './Componentes/Hero';
import Produtos from './Componentes/Produtos';
import { productData, productDataTwo } from './Componentes/Produtos/data';
import Feature from './Componentes/Feature';
import Footer from './Componentes/Footer';
import Feature from './Componentes/Features/Featuread';

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