import React from 'react';
import { MdDelete } from 'react-icons/md';
import { connect } from 'react-redux';
import { ActionTypes } from '../../../../store/actionTypes';

import './DetailItem.scss';





const DetailItem = ({item, deleteItem, removeItem, addItem}) => {

    
    const {imgUrl, title, price, quantity } = item;

    return(
        <React.Fragment>
            <tr className="shopping-cart-item">
                            <td className='image-wrapper'>
                                    <img src={imgUrl} alt="Product"/>
                            </td>
                            <td className='title-wrapper'>
                                <p className='product-title'>{title}</p>
                            </td>
                            <td className='price-wrapper'>
                                <p className="p-price">{price}</p>
                            </td>
                            <td className='input-wrapper'>
                                <span onClick={() => quantity > 1 ? removeItem(item.id) : null} >-</span>
                                <input readOnly type="number" min='1' name="quantity" value={quantity} className="quantity"/>
                                <span onClick={() => addItem(item)} >+</span> 
                            </td>
                            <td className='tot-price-wrapper'>
                                <p>{price*quantity}</p>
                            </td>
                            <td className='btn-wrapper'>
                                <button className="delete" onClick={()=> deleteItem(item.id)}>
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: itemId => dispatch({type: ActionTypes.DELETE_FROM_CART, payload: itemId}),
        removeItem: itemId => dispatch({type: ActionTypes.REMOVE_FROM_CART, payload: itemId}),
        addItem: item => dispatch({type: ActionTypes.ADD_TO_CART, payload: item})
    }
}
export default connect(null, mapDispatchToProps)(DetailItem);