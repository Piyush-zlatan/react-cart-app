import React from 'react';
import CartItem from './CartItem'

const Cart = (props) => {
    
// if we are passing same component for differnt prop then react doesnot know how to differentiate
// so we need to pass a key as well.
    
        const {products} = props;
        return(
            <div className="cart"> 
            {products.map((product) =>{
                return <CartItem product = {product} key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteProduct={props.onDeleteProduct}/>
            })}
            </div>
        );
    }


export default Cart;