import React, { Component } from "react";
import styl from "./PersonCard.module.css";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, age, hairColor } = this.props;
    this.state = {
      firstName: firstName,
      lastName: lastName,
      age: this.props.age,
      hairColor: hairColor,
    };
  }

  birthdayIncrease = () => {
    let newAge = this.state.age + 1;
    this.setState({ age: this.state.age + 1 });
    // this.setState(() => {
    //   return { age: newAge };
    // });
    if (this.state.age >= 99) {
      alert("you are 100!!!");
      return;
    }
    console.log("this.state.age =>", this.state.age);
  };

  render() {
    // do some stuff here before return
    // const { firstName, lastName, age, hairColor } = this.props;
    const { firstName: f_name, lastName: l_name, age, hairColor: h_color } = this.state;
    return (
      <div>
        {/* {this.props} */}
        <h2>
          {/* {this.props.firstName}, {this.props.lastName} */}
          {this.state.firstName}, {l_name}
        </h2>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {this.state.hairColor}</p>
        <button className={styl.btn} onClick={this.birthdayIncrease}>
          Birthday Button for {f_name} &middot; {this.state.lastName}
        </button>
      </div>
    );
  }
}

export default PersonCard;
