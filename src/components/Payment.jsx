import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';

import '../css/Payment.css'

export default function Payment() {
    const [{basket, user}] = useStateValue();
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout ( <Link to='/checkout'>{basket.length} items</Link>)
                </h1>
            
                {/* Payment section - delivary address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 react home</p>
                        <p>Kandahar, Af</p>
                    </div>
                </div>

                {/* payment section - review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {
                            basket.map(item => (
                                <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                />
                                ))
                            }
                    </div>
                </div>

                {/* payment section - payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__detail">
                        {/* Stripe magic will go here */}
                    </div>
                </div>    
            </div>
        </div>
    )
}