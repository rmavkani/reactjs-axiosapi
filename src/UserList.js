import React from "react";
import UserDetail from "./UserDetail";
import { Link } from "react-router-dom";

const UserList = (props) => {
  console.log(props);

  const deleteUserHandler = (id) => {
    props.getUserId(id);
  };

  let renderUD;
  if (props.users) {
    renderUD = props.users.map((user) => {
      return (
        <UserDetail
          user={user}
          clickHandler={deleteUserHandler}
          key={user.id}
        />
      );
    });
  } else {
    renderUD = "User Not yet Registered with us!";
  }
  return (
    <div className="main">
      <h3> Registered Users</h3>
      <div className="ui celled list">{renderUD}</div>
      <Link to="/userReg">
        <button className="ui button blue right">Register User</button>
      </Link>
    </div>
  );
};

export default UserList;
