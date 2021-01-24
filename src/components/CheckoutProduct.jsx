import React from 'react'

import '../css/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

export default function CheckoutProduct({id, title, price, rating, image}) {
    const [{basket}, dispatch] = useStateValue();
    const removeProductFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className='CheckoutProduct'>
            <img src={image} alt="product" className="CheckoutProduct__image"/>

            <div className="CheckoutProduct__info">
                <p className="CheckoutProduct__title">{title}</p>
                <p className="CheckoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="CheckoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_, i) => <p>*</p> )
                    }
                </div>
                <button className="CheckoutProduct__button" onClick={removeProductFromBasket}>Remove From Basket</button>
            </div>
        </div>
    )
}
