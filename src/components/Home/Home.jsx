import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import { connect } from 'react-redux';

import './Home.scss';

import Promo from '../Promo/Promo';
import Product from '../Product/Product';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';


const Home = ({items, full}) => {
    console.log(full);
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
                {
                    items?items.map(item=><Product key={item.id} item={item} />):null
                }
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

const mapStateToProps = (state) => {
    return {
        items: state.products,
        full: state
    }
};

export default connect(mapStateToProps)(Home);