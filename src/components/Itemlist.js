import React, { Component } from "react";
import Drinklist from "./Drinklist";
import Dessertlist from "./Dessertlist";

class Itemlist extends Component {
  state = {
    categoryChosen: "drinkList",
    selectedItem: false,
    dessertColor: "#FFFFFF",
  };

  // Set state based on category
  drinkSelected = (e) => {
    this.setState({
      dessertBackgroundColor: "#735545",
      dessertBorderRadius: "0",
      dessertColor: "#FFFFFF",
      drinkColor: "#000000",
      drinkBackgroundColor: "#FFFFFF",
      drinkBorderRadius: "5px 5px 0 0",
      categoryChosen: "drinkList",
    });
  };

  dessertSelected = (e) => {
    this.setState({
      drinkBackgroundColor: "#735545",
      drinkBorderRadius: "0",
      drinkColor: "#FFFFFF",
      dessertColor: "#000000",
      dessertBackgroundColor: "#FFFFFF",
      dessertBorderRadius: "5px 5px 0 0",
      categoryChosen: "dessertList",
    });
  };

  render() {
    const {
      drinkBackgroundColor,
      drinkBorderRadius,
      drinkColor,
      dessertBackgroundColor,
      dessertBorderRadius,
      dessertColor,
      categoryChosen,
    } = this.state;

    return (
      <div className='item-list-wrapper'>
        <div className='navbar'>
          <h1 className='header'>Coffee Time</h1>
          <h2
            className='drinks'
            style={{
              backgroundColor: drinkBackgroundColor,
              borderRadius: drinkBorderRadius,
              color: drinkColor,
            }}
            onClick={this.drinkSelected}
          >
            Drikke
          </h2>
          <h2
            className='dessert'
            style={{
              backgroundColor: dessertBackgroundColor,
              borderRadius: dessertBorderRadius,
              color: dessertColor,
            }}
            onClick={this.dessertSelected}
          >
            Dessert
          </h2>
        </div>

        {
          /* Render list of items based on category chosen by user */
          categoryChosen === "drinkList" ? (
            <Drinklist showOrder={this.props.showOrder} />
          ) : (
            <Dessertlist showShoppingcart={this.props.showShoppingcart} />
          )
        }
      </div>
    );
  }
}

export default Itemlist;
