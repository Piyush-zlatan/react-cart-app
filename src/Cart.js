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

    handleIncreaseQuantity = (product) =>{
        console.log('Please increase quay');
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty +=1;

        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty==0){
            return;
        }

        products[index].qty -=1;

        this.setState({
            // As the key and value are same, so products:products is equal to products.
            //ShortHands
            products
        })
    }

    handleDeleteProduct = (id) =>{
        const {products} =this.state;
        const items = products.filter((item)=> item.id !== id);
        console.log(items)
        this.setState({
            products:items
        })

    }
// if we are passing same component for differnt prop then react doesnot know how to differentiate
// so we need to pass a key as well.
    render(){
        const {products} = this.state;
        return(
            <div className="cart"> 
            {products.map((product) =>{
                return <CartItem product = {product} key={product.id}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteProduct={this.handleDeleteProduct}/>
            })}
            </div>
        );
    }

}
export default Cart;