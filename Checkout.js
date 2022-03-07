import React from "react"
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className='checkout__ad' src='https://paxcom.ai/wp-content/uploads/2016/06/banner.png'
            />
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {/* CheckoutProduct*/}
                {/* CheckoutProduct*/}
                {/* CheckoutProduct*/}

            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>

        </div>
    </div>
  )
}

export default Checkout