import React from "react";

const Footer =({id, name, description,img, price})=>{
  return(
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
  <div className="tc">
    <img src={img} className="br-100 h4 w4 dib ba b--black-05 pa2"/>
    <h1 className="f3 mb2">{name}</h1>
    <h2 className="f5 fw4 gray mt0">{description}</h2>
    <span> $ {price}</span><br/>
  </div>
</article>
  );
}
export default Footer;