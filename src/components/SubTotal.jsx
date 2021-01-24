import React from 'react'
import CurrencyFormat from "react-currency-format";
import '../css/SubTotal.css'
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';

export default function SubTotal() {
    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={
                    (value) => (
                        <>
                            <p>Subtotal ({basket.length} items): <strong>{value}</strong></p>
                            <small className="subtotal__gift">
                                <input type="checkbox" name="" id=""/>
                                This order contain a gift
                            </small>
                        </>
                    )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button className="subtotal__button">Proceed To Checkout</button>
        </div>
    )
}