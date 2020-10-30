import React from "react";
import Product from "./components/Product";
const Nav =()=>{
  const Product =({
    id ,
    name ,
    description,
    img, price
  })=>{
    value=>{
      
    }
  }
    return(
     
      <header className="bg-white black-80 tc pv4 avenir">

  <h1 className="mt2 mb0 baskerville i fw1 f1">E-shopping</h1>
  <h2 className="mt2 mb0 f6 fw4 ttu tracked">Lets Start shopping</h2>
  <nav className="bt bb tc mw7 center mt4">
    <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="#">Contact</a>
    <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-1 no-underline fa-shopping-cart " role="button" data-toggle="modal" data-target="#addtoCart" href="/Cart">Cart</a>

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





















  </nav>
</header>      
     
    );
  }
export default Nav;