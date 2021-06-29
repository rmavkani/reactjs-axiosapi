import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="ui vertical center footer segment">
        {" "}
        <h6>Thank you, {this.props.website} </h6>{" "}
      </div>
    );
  }
}
export default Footer;
