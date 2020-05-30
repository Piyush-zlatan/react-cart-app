import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar';
import * as firebase from 'firebase';

// making app to class to provide it state of cart so that navbar can use it

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
      
  }
  // Instead of calling firebase.firestore multiple times we called it into constructor
  this.db = firebase.firestore();
}

componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot.docs);

  //     snapshot.docs.map((doc)=>{
  //       console.log(doc.data())
  //     });

  //     const products = snapshot.docs.map((doc)=>{
  //       const data = doc.data();
  //       data['id'] = doc.id;
  //       return data;
  //     })

  //     this.setState({ 
  //       products:products,
  //       loading:false
  //     })

  //   })

 this.db
    .collection('products')
    .onSnapshot((snapshot) => {     //onSnapshot is called whenever there is something changed in coleection
      console.log(snapshot.docs);

      snapshot.docs.map((doc)=>{
        console.log(doc.data())
      });

      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({ 
        products:products,
        loading:false
      })

    })


}

handleIncreaseQuantity = (product) =>{
    console.log('Please increase quay');
    const {products} = this.state;
    const index = products.indexOf(product);

    // products[index].qty +=1;

    // this.setState({
    //     products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: product[index].qty + 1
    })
    .then(()=>{
      console.log('Document updated')
    })
    .catch((error)=>{
      console.log(error);
    })

}

handleDecreaseQuantity = (product) =>{
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0){
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

getTotalPrice = ()=>{
  const {products}  = this.state;

  let total=0;

  products.map((product) => {
    if(product.qty>0){
      total += product.qty * product.price;
    } 
    return '';
  })
  return total;
}

  addProduct = () =>{
   this.db
      .collection('products')
      .add({
        img:'',
        price: 900,
        qty: 3,
        title:'washing machine'
      })
      .then((docRef)=>{
        console.log('Product has been added',docRef);
      })
      .catch((error)=>{
        console.log('Error',error);
      })

  }

  render(){
    const {products,loading} = this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style={{padding:20, fontSize:20}}>Add a product</button> */}
      <Cart
      products ={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}/>
      {loading && <h1>loading Product</h1>}
      <div style={{fontSize:20,padding:10}}>TOTAL:{this.getTotalPrice()}</div>
    </div>
  );
}
}
export default App;
