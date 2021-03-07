import React, { Component } from "react";

export class Dessertlist extends Component {
  render() {
    return (
      <div className='dessert-list-wrapper'>
        <ul className='item-component-ul'>
          <li
            className='item-component'
            id='brioche'
            onClick={this.props.showShoppingcart}
          >
            <img
              className='item-img'
              src={require("./assets/img/brioche.png")}
              alt='bilde'
            />
            <h2 className='item-name'>Brioche</h2>
            <h3 className='item-price'>Fra 44,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='brownie'
            onClick={this.props.showShoppingcart}
          >
            <img
              className='item-img'
              src={require("./assets/img/brownie.png")}
              alt='bilde'
            />
            <h2 className='item-name'>Brownie</h2>
            <h3 className='item-price'>Fra 44,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='chiapudding'
            onClick={this.props.showShoppingcart}
          >
            <img
              className='item-img'
              src={require("./assets/img/chiapudding.png")}
              alt='bilde'
            />
            <h2 className='item-name'>Chiapudding</h2>
            <h3 className='item-price'>Fra 49,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='kanelbolle'
            onClick={this.props.showShoppingcart}
          >
            <img
              className='item-img'
              src={require("./assets/img/kanel.png")}
              alt='bilde'
            />
            <h2 className='item-name'>Kanelbolle</h2>
            <h3 className='item-price'>Fra 29,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='scones'
            onClick={this.props.showShoppingcart}
          >
            <img
              className='item-img'
              src={require("./assets/img/scones.png")}
              alt='bilde'
            />
            <h2 className='item-name'>Scones</h2>
            <h3 className='item-price'>Fra 37,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='oreo'
            onClick={this.props.showShoppingcart}
          >
            <img
              className='item-img'
              src={require("./assets/img/oreo.png")}
              alt='bilde'
            />
            <h2 className='item-name'>Oreokake</h2>
            <h3 className='item-price'>Fra 54,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <div className='footer'>
            <h1 className='header'>Coffee Time</h1>
            <p className='address'>
              Oslo gate 31 A <br></br> 0155 Oslo{" "}
            </p>
            <p className='phonenumber'>+47 00 00 00 00</p>
          </div>
        </ul>
      </div>
    );
  }
}

export default Dessertlist;
