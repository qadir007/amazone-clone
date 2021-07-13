import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { CardElement ,useElements, useStripe } from '@stripe/react-stripe-js';

import '../css/Payment.css'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from '../reducer';
import axios from '../axios';

export default function Payment() {
    const [{basket, user}] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(null)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios ({
                method: 'post',
                url: `/payment/create?Total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        })
        
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : null);
    }

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
                        <form action="" onSubmit={handleSubmit}>
                            <CardElement  onChange={handleChange}/>

                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => {
                                        <>
                                        <h3>Order Total: (value)</h3>
                                        </>
                                    }}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing | disabled | succeeded}>
                                    <span>
                                        {processing? <p>Processing</p> : 'Pay Now' } 
                                    </span>
                                </button>
                            </div>
                            {error && <span className="payment__error_message">{error}</span >}
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    )
}