import React, { Component } from "react";

export class Shoppingcart extends Component {
  state = {
    list: ["Filterkaffe", "Caramel", "Kanelbolle"],
  };

  onRemoveItem = (i) => {
    this.setState((state) => {
      const list = state.list.filter((item, j) => i !== j);

      return {
        list,
      };
    });
  };

  render() {
    return (
      <div className='shoppingcart-wrapper'>
        <div className='navbar-simple'>
          <button className='back-btn' onClick={this.props.showItemlist}>
            Meny
          </button>
          <h1 className='header'>Coffee Time</h1>
        </div>

        <h2 className='page-header'>Handlekurv</h2>

        <ul className='shoppingcart-ul'>
          <li className='shoppingcart-li li-header'>
            <p className='shoppingcart-li-name'>Vare</p>
            <p className='shoppingcart-li-amount'>Antall</p>
            <p className='shoppingcart-li-price'>Pris</p>
          </li>
          {this.state.list.map((item, index) => (
            <li className='shoppingcart-li' key={item}>
              <p className='shoppingcart-li-name'>{item}</p>
              <p className='shoppingcart-li-amount'>1stk</p>
              <p className='shoppingcart-li-price'>29,-</p>
              <button
                className='shoppingcart-li-remove-btn'
                onClick={() => this.onRemoveItem(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>

        <div className='options'>
          <h3>Total</h3>
        </div>
        <div className='shoppingcart-total'>
          <p>Totalt</p>
          <p className='total-price-cart'>87,-</p>
        </div>

        <div className='cart-footer-wrapper'>
          <div className='cart-footer'>
            <button
              className='pay-cart'
              onClick={this.props.showPurchaseComplete}
            >
              Betal
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoppingcart;
