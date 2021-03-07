import React, { Component } from "react";

export class drinklist extends Component {
  render() {
    return (
      <div className='drinklist-wrapper'>
        <ul className='item-component-ul'>
          <li
            className='item-component'
            id='filterkaffe'
            onClick={this.props.showOrder}
          >
            <img
              className='item-img'
              src={require("./assets/img/filterkaffe.png")}
              alt='filterkaffe'
            />
            <h2 className='item-name'>Filterkaffe</h2>
            <h3 className='item-price'>Fra 29,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='americano'
            onClick={this.props.showOrder}
          >
            <img
              className='item-img'
              src={require("./assets/img/americano.png")}
              alt='americano'
            />
            <h2 className='item-name'>Americano</h2>
            <h3 className='item-price'>Fra 32,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='iskaffe'
            onClick={this.props.showOrder}
          >
            <img
              className='item-img'
              src={require("./assets/img/iskaffe.png")}
              alt='iskaffe'
            />
            <h2 className='item-name'>Iskaffe</h2>
            <h3 className='item-price'>Fra 36,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='cappucino'
            onClick={this.props.showOrder}
          >
            <img
              className='item-img'
              src={require("./assets/img/cappucino.png")}
              alt='cappucino'
            />
            <h2 className='item-name'>Cappuccino</h2>
            <h3 className='item-price'>Fra 38,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='caramel'
            onClick={this.props.showOrder}
          >
            <img
              className='item-img'
              src={require("./assets/img/caramel.png")}
              alt='caramel'
            />
            <h2 className='item-name'>Caramel</h2>
            <h3 className='item-price'>Fra 29,-</h3>
            <h3 className='item-add'>Legg til</h3>
          </li>
          <li
            className='item-component'
            id='iste'
            onClick={this.props.showOrder}
          >
            <img
              className='item-img'
              src={require("./assets/img/iste.png")}
              alt='iste'
            />
            <h2 className='item-name'>Iste</h2>
            <h3 className='item-price'>Fra 38,-</h3>
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

export default drinklist;
