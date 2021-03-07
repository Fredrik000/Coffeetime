import React, { Component } from "react";
import "./scss/main.css";
import Itemlist from "./components/Itemlist";
import Order from "./components/Order";
import Shoppingcart from "./components/Shoppingcart";
import SeeShoppingcart from "./components/SeeShoppingcart";
import PurchaseComplete from "./components/PurchaseComplete";

class App extends Component {
  state = {
    showItemlist: true,
    showSeeShoppingcart: false,
    showOrder: false,
    showShoppingcart: false,
    showPurchaseComplete: false,
  };

  showItemlist = (e) => {
    this.setState({
      showItemlist: true,
      showSeeShoppingcart: false,
      showOrder: false,
      showShoppingcart: false,
      showPurchaseComplete: false,
    });
  };

  showSeeShoppingcart = (e) => {
    this.setState({
      showSeeShoppingcart: true,
      showItemlist: true,
      showOrder: false,
      showShoppingcart: false,
      showPurchaseComplete: false,
    });
  };

  showOrder = (e) => {
    this.setState({
      showOrder: true,
      showItemlist: false,
      showSeeShoppingcart: false,
      showShoppingcart: false,
      showPurchaseComplete: false,
    });
  };

  showShoppingcart = (e) => {
    this.setState({
      showShoppingcart: true,
      showItemlist: false,
      showSeeShoppingcart: false,
      showOrder: false,
      showPurchaseComplete: false,
    });
  };

  showPurchaseComplete = (e) => {
    this.setState({
      showPurchaseComplete: true,
      showItemlist: false,
      showSeeShoppingcart: false,
      showOrder: false,
      showShoppingcart: false,
    });
  };

  render() {
    const {
      showItemlist,
      showOrder,
      showShoppingcart,
      showPurchaseComplete,
      showSeeShoppingcart,
    } = this.state;

    return (
      <div className='App'>
        {showItemlist ? (
          <Itemlist
            showOrder={this.showOrder}
            showSeeShoppingcart={this.showSeeShoppingcart}
            showShoppingcart={this.showShoppingcart}
          />
        ) : null}

        {showSeeShoppingcart ? (
          <SeeShoppingcart showShoppingcart={this.showShoppingcart} />
        ) : null}

        {showOrder ? (
          <Order
            showSeeShoppingcart={this.showSeeShoppingcart}
            showItemlist={this.showItemlist}
          />
        ) : null}

        {showShoppingcart ? (
          <Shoppingcart
            showItemlist={this.showItemlist}
            showPurchaseComplete={this.showPurchaseComplete}
          />
        ) : null}

        {showPurchaseComplete ? (
          <PurchaseComplete showItemlist={this.showItemlist} />
        ) : null}
      </div>
    );
  }
}

export default App;
