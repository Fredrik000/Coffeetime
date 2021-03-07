import React, { Component } from "react";

export class SeeShoppingcart extends Component {
  render() {
    return (
      <div className='see-shoppingcart-wrapper'>
        <p className='see-shoppingcart-amount'>3</p>
        <button
          className='see-shoppingcart-btn'
          onClick={this.props.showShoppingcart}
        >
          Se handlekurv
        </button>
        <p className='see-shoppingcart-total'>87,-</p>
      </div>
    );
  }
}

export default SeeShoppingcart;
