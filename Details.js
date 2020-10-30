import React , { Component} from "react";
import {ProductConsumer} from "./context";

export default class Details extends Component{
  render(){
    return(
      <ProductConsumer>
      {value=>{
        const{
          id, name, description, img, price, inCart
        }= value.detailProduct;
      }}
      return(
          <div className="container py-5">
          
         <p> This</p>
          </div>
          <button className="btn btn-primary" cart 
          onCLick={()=>{
              value.addToCart(id);
              value.openModal(id);
          }}>
         {addtoCart}
          </button>

      )
      
      
      
      
      
      
      
      </ProductConsumer>    );
  }
}