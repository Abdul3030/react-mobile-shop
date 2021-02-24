import React from 'react';
import { MdDelete } from 'react-icons/md';


import './DetailItem.scss';





const DetailItem = ({item}) => {
    const {imgUrl, title, price, quantity } = item;
    console.log(item);
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
                                <input type="number" min='1' name="quantity" readOnly value={quantity} className="quantity"/> 
                            </td>
                            <td className='tot-price-wrapper'>
                                <p>{price*quantity}</p>
                            </td>
                            <td className='btn-wrapper'>
                                <button className="delete">
                                    <MdDelete />
                                </button>
                            </td>
                        </tr>
        </React.Fragment>
    )
}


export default DetailItem;