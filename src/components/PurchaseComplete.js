import React, { Component } from "react";

export class purchaseComplete extends Component {
  render() {
    return (
      <div className='purchase-complete-wrapper'>
        <div className='navbar-simple'>
          <button className='back-btn' onClick={this.props.showItemlist}>
            Meny
          </button>
          <h1 className='header'>Coffee Time</h1>
        </div>

        <div className='purchase-complete-message-wrapper'>
          <h1 className='purchase-complete-message'>Takk for kjøpet!</h1>
          <div className='footer'>
            <h1 className='header'>Coffee Time</h1>
            <p className='address'>
              Oslo gate 31 A <br></br> 0155 Oslo{" "}
            </p>
            <p className='phonenumber'>+47 00 00 00 00</p>
          </div>
        </div>
      </div>
    );
  }
}

export default purchaseComplete;
