import React from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import { connect } from 'react-redux';

import './Home.scss';

import Promo from '../Promo/Promo';
import Product from '../Product/Product';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';


const Home = ({ products }) => {
    
    return (
        <div className="home-container">
            <Navigation />
            <Header />
            <div className="promos-container">
                <Promo imgUrl={'https://cdn.shopify.com/s/files/1/0067/6433/1090/files/01_187fddae-f806-43cc-b163-9fae6dd33497_400x.png'} />
                <Promo imgUrl={'https://cdn.shopify.com/s/files/1/0067/6433/1090/files/02_3ab66bf3-7f74-49bc-91c8-bd227aa7d438_400x.png'}/>
                <Promo imgUrl={'https://cdn.shopify.com/s/files/1/0067/6433/1090/files/03_1d2c8c2a-8aba-4933-b1c8-45435222a661_400x.png'} />
                <Promo imgUrl={'https://cdn.shopify.com/s/files/1/0067/6433/1090/files/04_e05e6150-f73f-477b-b41d-5f3fbf52f6a9_600x.png'} />
            </div>
            <div className="products-header">
                    <h2 className="title">Best Seller</h2>
                    <h4 className="subtitle">Top products of this week</h4>
            </div>
            <div className="products-container">

                {
                    products ? products.map(item=><Product key={item.id} item={item} />) : null
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
        products: state.products.SHOP_DATA
    }
};

export default connect(mapStateToProps)(Home);