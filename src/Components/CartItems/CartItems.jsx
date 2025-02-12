import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

export const CartItems = () => {

  const {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if (cartItems[e.id]>0) {
          return(
            <div>
              <div key={e.id} className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p style={{marginLeft: '20px'}}>${e.new_price}</p>
                <p className='cartitems-quantity'>
                  <button onClick={()=>{removeFromCart(e.id)}} className='cartitems-quantity-control'>-</button>
                  <button className='cartitems-quantity-display'>{cartItems[e.id]}</button>
                  <button onClick={()=>{addToCart(e.id)}} className='cartitems-quantity-control'>+</button>
                </p>
                <p>${e.new_price*cartItems[e.id]}</p>
              </div>
              <hr/>
            </div>
          )
        }
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <hr />
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className='cartitems-promocode'>
          <p>If you have a promo code, Enter it here</p>
          <div className='cartitems-promobox'>
            <input type='text' placeholder='Promo code'/>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}
