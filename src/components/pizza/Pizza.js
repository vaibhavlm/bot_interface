import React, { Component } from "react";
import "./Pizza.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Base from "../base/Base";
import Tomato from "../tomato/Tomato";
import Mushroom from "../mushroom/Mushroom";
import Corn from "../corn/Corn";
import Veggie from "../veggie/Veggie";
import Bot from '../Bot/Bot';

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tomato: false,
      mushroom: false,
      veggie: false,
      corn: false
    };
  }

  clickEventHandler = ingredient => {
    if (ingredient === "tomato") {
      this.setState({
        tomato: !this.state.tomato
      });
    } else if (ingredient === "mushroom") {
      this.setState({
        mushroom: !this.state.mushroom
      });
    } else if (ingredient === "corn") {
      this.setState({
        corn: !this.state.corn
      });
    } else {
      this.setState({
        veggie: !this.state.veggie
      });
    }
  };

  render() {
    const tomato = this.state.tomato && <Tomato />;
    const mushroom = this.state.mushroom && <Mushroom />;
    const corn = this.state.corn && <Corn />;
    const veggie = this.state.veggie && <Veggie />;

    return (
      <div>
        <div className="container mt-5">
          <div className="d-flex justify-content-center">
            <div className="row">
            <div className="col-12">
              <h1>Pizza Shop</h1>
              </div>
              </div>
              <div className="pt-5 pr-5 ">
            <div className="plate">
              <Base />
              {tomato}
              {mushroom}
              {corn}
              {veggie}
            </div>
          </div>
          </div>
          <Bot eventHandler={this.clickEventHandler} />
        </div>
      </div>
    );
  }
}

export default Pizza;
