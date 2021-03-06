import React, { Component } from "react";
import "./FadForm.css";
import API from "../../utils/API";

class FadForm extends Component {
  state = {
    ofAge: "",
    haveOwned: "",
    unanYes: "",
    fullAvail: "",
    aggroPets: "",
    hasTallFence: "",
    address1: "",
    address2: "",
    state: "",
    city: "",
    zip: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({
      [name]: value
    });
  }

  unacceptable = e => {
    const { value } = e.target;
    e.preventDefault()
    // alert("You dum")
    if(value === "false") {
      alert("Based on your selection, we are sorry we cannot allow you to move forward in the adoption process")
    }
  }
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    // the below api update method doesn't exist yet
    API.updateUserByEmail(this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row formRow">
        <form className="col s8">
          <div className="row">
            <p>
              <label>
                <input
                  name="ofAge"
                  value="true"
                  required
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>18 or older</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="ofAge"
                  value="false"
                  onClick={this.unacceptable}
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Younger than 18</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="haveOwned"
                  value="true"
                  required
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Owned Dog Before</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="haveOwned"
                  value="false"
                  onClick={this.unacceptable}
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Never Owned Dog</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="unanYes"
                  value="true"
                  required
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Household agrees with adoption of dog</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="unanYes"
                  value="false"
                  onClick={this.unacceptable}
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Household does not agree with adoption of dog</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="fullAvail"
                  value="true"
                  required
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Full Availability</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="fullAvail"
                  value="false"
                  onClick={this.unacceptable}
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Part Time Availability</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="aggroPets"
                  value="true"
                  required
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has aggressive pets (true)</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="aggroPets"
                  value="false"
                  required
                  onClick={this.unacceptable}
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has aggressive pets (false)</span>
              </label>
            </p>
          </div>
          <div className="row">
            <p>
              <label>
                <input
                  name="hasTallFence"
                  value="true"
                  required
                  //checked={this.state.type === "true"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has a tall fence in yard</span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="hasTallFence"
                  value="false"
                  onClick={this.unacceptable}
                  //checked={this.state.type === "false"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has a tall fence in yard </span>
              </label>
            </p>
            <p>
              <label>
                <input
                  name="hasTallFence"
                  value="false"
                  onClick={this.unacceptable}
                  //checked={this.state.type === "noYard"}
                  onChange={this.handleInputChange}
                  defaultChecked=""
                  type="radio"
                />
                <span>Has no yard</span>
              </label>
            </p>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input
                id="address1"
                name="address1"
                value={this.state.address1}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="address1">Address 1</label>
            </div>
            <div className="input-field col s6">
              <input
                id="address2"
                name="address2"
                value={this.state.address2}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="address2">Address 2</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input
                id="state"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="state">State</label>
            </div>
            <div className="input-field col s4">
              <input
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.handleInputChange}
                type="text"
                className="validate"
              />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s4">
              <input
                id="zip"
                name="zip"
                value={this.state.zip}
                onChange={this.handleInputChange}
                type="number"
                className="validate"
              />
              <label htmlFor="zip">Zip</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FadForm;
