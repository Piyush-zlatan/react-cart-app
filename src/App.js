import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';


// making app to class to provide it state of cart so that navbar can use it

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
            {  price:99,
                title:'Watch',
                qty:1,
                img:'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=340&q=80' ,
                id:1
            },
            {  price:999,
                title:'Phone',
                qty:10,
                img:'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
                id:2 
            },
            {  price:999,
                title:'Phone',
                qty:1,
                img:'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=393&q=80',
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

getCartCount =()=>{
  const {products}  = this.state;
  let count = 0;
  products.forEach((product)=>{
    count+=product.qty;
  })

  return count;
} 

  render(){
    const {products} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products ={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}/>
    </div>
  );
}
}
export default App;
