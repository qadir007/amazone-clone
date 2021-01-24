import React from 'react'

import '../css/Checkout.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal'

export default function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images.unsplash.com/photo-1611401775783-b186213c7777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" alt="" className="checkout__ad"/>

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
                {
                    basket.map((item) => {
                        return (<CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                        />)
                    })
                }
            </div>

            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}
