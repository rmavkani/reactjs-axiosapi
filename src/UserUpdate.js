import React from "react";

class UserUpdate extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, mail } = props.location.state.user;
    this.state = {
      id,
      name,
      mail
    };
  }

  updateUser = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.mail === "") {
      alert("Enter all mandatory fields!");
      return;
    }
    this.props.updateUserHandler(this.state);
    this.setState({ name: "", mail: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main segment">
        <h2>Update User Details </h2>
        <form className="ui form" onSubmit={this.updateUser}>
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
          <button className="ui button blue">Update User</button>
        </form>
      </div>
    );
  }
}
export default UserUpdate;
