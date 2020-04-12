import React from 'react';

class CartItem extends React.Component{
    //Adding state: State is a way to save data locally for that component
    // Adding state using constructor
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:'' 
        }
    }
    render(){
        const {price,title,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
        <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs.{price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                    {/* {Button} */}
                    <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/svg/992/992651.svg"/>
                    <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg"/>
                    <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/447/447047.svg"/>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;