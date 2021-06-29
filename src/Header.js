import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="ui menu center">
        <h1 className="ui blue header">Seyon Homoeo Clinic</h1>
        <div className="ui blue center">{this.props.place}</div>
      </div>
    );
  }
}
export default Header;
