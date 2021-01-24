import React from 'react'
import '../css/Home.css'
import Product from './Product'

function Home() {
    
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.png" 
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="321" 
                        title="The Lean Startup" 
                        price={20.12} 
                        rating={2} 
                        image="https://images.unsplash.com/photo-1611401775783-b186213c7777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" 
                    />
                    <Product 
                        id="322"
                        title="The Lean Startup" 
                        price="20.12" 
                        rating='2' 
                        image="https://images.unsplash.com/photo-1611401775783-b186213c7777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" 
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="323"
                        title="The Lean Startup" 
                        price="20.12" 
                        rating='2' 
                        image="https://images.unsplash.com/photo-1611401775783-b186213c7777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" 
                    />
                    <Product 
                        id="324"
                        title="The Lean Startup" 
                        price="20.12" 
                        rating='2' 
                        image="https://images.unsplash.com/photo-1611401775783-b186213c7777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" 
                    />
                    <Product 
                        id="325"
                        title="The Lean Startup" 
                        price="20.12" 
                        rating='2' 
                        image="https://images.unsplash.com/photo-1611401775783-b186213c7777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" 
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="326"
                        title="The Lean Startup" 
                        price="20.12" 
                        rating='2' 
                        image="https://images.unsplash.com/photo-1611401775783-b186213c7777?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=704&q=80" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
