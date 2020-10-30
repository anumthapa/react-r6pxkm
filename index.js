import React, { Component } from "react";
import { render } from "react-dom";
import Nav from "./Nav";
// import Productss from "./Productss";
import "./style.css";
// import { storeProducts, detailProduct } from "./data";
// import Productss from "./Productss";
// import ProductList from "./ProductList";
import Product from "./components/Product";
// import Footer from "./components/Footer";
// import Details from "./Details";


const product = [
  {
    id: 1,
    name: "TShirt",
    description: "This is the new Tshirt in the ",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 2000.0
  },
  {
    id: 2,
    name: "TShirt",
    description: "This is the new Tshirt in the ",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 1300.0
  },
  {
    id: 3,
    name: "TShirt",
    description: "This is the new Tshirt in the",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 300.0
  },
  {
    id: 4,
    name: "TShirt",
    description: "This is the new Tshirt in the",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 10.0
  },
  {
    id: 5,
    name: "TShirt",
    description: "This is the new Tshirt in the",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 500.0
  },
  {
    id: 6,
    name: "TShirt",
    description: "This is the new Tshirt in the",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 2000.0
  },
  {
    id: 7,
    name: "TShirt",
    description: "This is the new Tshirt in the",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 1300.0
  },
  {
    id: 8,
    name: "TShirt",
    description: "This is the new Tshirt in the",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 300.0
  },
  {
    id: 9,
    name: "TShirt",
    description: "This is the new Tshirt in the",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 10.0
  },
  {
    id: 10,
    name: "TShirts",
    description: "This is the new Tshirt in the",
    img:
      "https://ae01.alicdn.com/kf/HTB1RyrhdEz.BuNjt_j7q6x0nFXaC/COOLMIND-FU0117A-Summer-Design-Funny-Unlock-Men-T-shirt-Phone-Screen-Top-Tee-Shirts-100-Cotton.jpg",
    price: 500.0
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <Nav />,
              
 <main className=" pa3 pa5-ns flex flex-wrap">
          {product.map(p => (
            <Product key={p.id} {...p} />
          ))}
        </main>
      
      </div>      
        
           
      
      
    );
  }
}

render(<App />, document.getElementById("root"));
