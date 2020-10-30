import React from "react";
import Footer from "./Footer";
import {ProductConsumer} from "./context";
import Productss from "./Productss";

const Product =({id, name, description,img, price})=>{
  value=>{}
  return(

    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
  <div className="tc">
    <img src={img} className="br-100 h4 w4 dib ba b--black-05 pa2"/>
    <h1 className="f3 mb2">{name}</h1>
    <h2 className="f5 fw4 gray mt0">{description}</h2>
    <span> $ {price}</span><br/>

    <button  
    role="button"
    className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
    data-toggle="modal"
    data-target="#addtoCart"
    >
    Add to Carts
    </button>
<div class="modal fade" id="addtoCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add to Cart</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <img src={img}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-black" data-dismiss="modal">Close</button>
        <button type="button" class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green"
          onClick={()=>{
            alert("this is Add to cart");
          }}
        
         >Add to Cart</button>
      </div>
    </div>
  </div>
</div>














  </div>
</article>
  );
}
export default Product;