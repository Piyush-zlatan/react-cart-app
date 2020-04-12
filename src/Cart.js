import React from 'react';
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {  price:99,
                    title:'Watch',
                    qty:1,
                    img:'' ,
                    id:1
                },
                {  price:999,
                    title:'Phone',
                    qty:10,
                    img:'',
                    id:2 
                },
                {  price:999,
                    title:'Phone',
                    qty:1,
                    img:'',
                    id:3 
                }
            ]
          
    }
}
// if we are passing same component for differnt prop then react doesnot know how to differentiate
// so we need to pass a key as well.
    render(){
        const {products} = this.state;
        return(
            <div className="cart"> 
            {products.map((product) =>{
                return <CartItem product = {product} key={product.id}/>
            })}
            </div>
        );
    }

}
export default Cart;