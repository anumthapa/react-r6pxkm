import React ,{Component} from "react";
import {storeProducts}from "./data";
import {ProductConsumer} from "./context";
import Product from "./Product";
import Productss from "./Productss";
import styled from "styled-components";
export default class ProductList extends Component{
  state = {
    products :storeProducts
  };
  render(){
  
    return(
       <React.Fragment>
    <ProductWrapper className="py-5">
      <div className="container">
        <div className="row">
          <ProductConsumer>
          {value =>{
            return value.products.map(product=>{
              return <Productss key={product.id} product ={product }/>
            })
          }}
          </ProductConsumer>
        </div>
      </div>    
    </ProductWrapper>
    </React.Fragment>
    );
  }
}
 const ProductWrapper = styled.section``;