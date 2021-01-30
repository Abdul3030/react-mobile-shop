import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import './Home.scss';
import Promo from '../Promo/Promo';
import Product from '../Product/Product';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';


const Home = () => {

    return (
        <div className="home-container">
            <Navigation />
            <Header />
            <div className="promos-container">
                <Promo />
                <Promo />
                <Promo />
                <Promo />
            </div>
            <div className="products-container">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <section className="services-container">
                <Service/>
                <Service/>
                <Service/>
            </section>
            <Footer />
        </div>
    )
};



export default Home;