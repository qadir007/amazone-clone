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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCzbee1zEdr8r7Fg-5NRpifAhagbX-CF_Pg&usqp=CAU"/>

                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                </div>
                <div className="checkout__items">
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
            </div>

            <div className="checkout__right">
                <SubTotal />
            </div>
        </div>
    )
}
