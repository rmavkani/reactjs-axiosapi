import React from "react";

class UserRegistration extends React.Component {
  state = { name: "", mail: "" };
  addUser = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.mail === "") {
      alert("Enter all mandatory fields!");
      return;
    }
    this.props.addUserHandler(this.state);
    this.setState({ name: "", mail: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main segment">
        <h2>User Registration </h2>
        <form className="ui form" onSubmit={this.addUser}>
          <div className="field">
            <label>User Name </label>
            <input
              type="text"
              name="user name"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
              placeholder="Enter your User Name"
            />
          </div>
          <div className="field">
            <label>Mail Id </label>
            <input
              type="text"
              name="mail"
              onChange={(e) => this.setState({ mail: e.target.value })}
              placeholder="Enter your Mail Id"
              value={this.state.mail}
            />
          </div>
          <button className="ui button blue">Save User</button>
        </form>
      </div>
    );
  }
}
export default UserRegistration;
