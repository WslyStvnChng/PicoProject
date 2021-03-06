
import React, { Component } from "react";
import "./AgencyNav.css";

// here, agency nav is given value of All, imcomplete, fostered, ect...Note, the way the css is made, if you click on the side of the button, it will work, click on the middle of the button and it registrers as incomplete. My tutor told me that the there is a css problem that isnt isolating the full button properly

class AgencyNav extends Component {
  render() {
    return (
      <div className="navBackground z-depth-2">
        <button className="navButton green darken-2" onClick={this.props.componentsDogClick}>
          <i className="material-icons white-text medium">edit</i>
          <br />
          Compose Dog
        </button>
        <button onClick={this.props.click} className="navButton green darken-2">
          <div>
            <i className="material-icons white-text medium">pets</i>
            <br />
            All Dogs
          </div>
        </button>
        <button onClick={this.props.click} className="navButton green darken-2" value="incomplete">
          <i className="material-icons white-text medium" value="incomplete">report_problem</i>
          <br />
          Incomplete Dogs
        </button>
        <button onClick={this.props.click} className="navButton green darken-2" value="complete">
          <i className="material-icons white-text medium">check_box</i>
          <br />
          Complete Dogs
        </button>
        <button onClick={this.props.click} className="navButton green darken-2" value="fostered">
          <i className="material-icons white-text medium">mood</i>
          <br />
          Fostered / Adoped Dogs
        </button>
        <button onClick={this.props.click} className="navButton green darken-2" value="transferred">
          <i className="material-icons white-text medium">swap_horiz</i>
          <br />
          Transferred Dogs
        </button>
        <button className="navButton green darken-2" onClick={this.props.componentsUserClick}>
          <i className="material-icons white-text medium">account_circle</i>
          <br />
          Agency Information
        </button>
      </div>
    );
  }
}

export default AgencyNav;