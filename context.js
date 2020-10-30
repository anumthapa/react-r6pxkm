import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();
class Context extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartTotal: 0
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    }, this.checkCartItems);
  };
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = id => {
    let temProducts = [...this.state.products];
    const index = temProducts.indexOf(this.getItem(id));
    const product = temProducts[index];

    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return {
          products: [...temProducts],
          detailProduct: { ...product }
        };
      },
      this,
      addTotals
    );
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  CloseModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  addTotals = () => {
    const totals = this.getTotals();
    this.setState(() => {
      return {};
    });
  };
  render() {
    return (
      <ProductContext.Provider
      value={{
          ...this.state,
          handleDetail :this.handleDetail,
          addToCart :  this.addToCart,
          openModal : this.openModal,
          closeModal :this.closeModal,

      }}>{this.props.children}</ProductContext.Provider>
    );
  }
}
const ProuctConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
