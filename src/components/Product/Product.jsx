import React, { useEffect, useRef, useState } from 'react';
import Rating from 'react-rating';
import { BsStar, BsStarFill } from 'react-icons/bs';
import {AiOutlineShopping} from 'react-icons/ai';
import './Product.scss';
import { connect } from 'react-redux';





const Product = ({item, addToCart}) => {
    const {imgUrl, title, brand, rating, price} = item;
    const [height, setHeight] = useState();

    const productRef = useRef();
    
    const getHeight = () => {
       const oHeight = productRef.current.offsetHeight;
       setHeight(oHeight);
    };
    
    useEffect(()=> {
       
        productRef.current.addEventListener('load', getHeight());

    },[height]);
    
    return (
        <div className="product-container" ref={productRef}>
            <div className="product-wrapper" style={{maxHeight: height}}>
                <div className="image-wrapper">
                    <img src={imgUrl} alt="" className="product-image"/>
                </div>
                <div className="description-container">
                    <div className="description-wrapper">
                        <div className="row-subtitle">
                            <h5 className="brand-name">
                                {brand}
                            </h5>
                            <div className="rating">
                                <Rating
                                    initialRating={rating}
                                    emptySymbol={<BsStar/>}
                                    fullSymbol={<BsStarFill/>}
                                    fractions={2}
                                    readonly
                                    />
                            </div>
                        </div>
                        <div className="row-title">
                            <p className="product-title">
                                {title}
                            </p>
                        </div>
                        <div className="row-price">
                            <h4 className="price">
                                ${price}
                            </h4>
                        </div>
                    </div>
                    <div className="btn-wrapper">
                        <button className="add-to-cart" onClick={() => addToCart(item)}>
                           <AiOutlineShopping className="btn-icon"/> add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: item => dispatch({type:'ADD_TO_CART', payload: item})
    }
}


export default connect(null, mapDispatchToProps)(Product);