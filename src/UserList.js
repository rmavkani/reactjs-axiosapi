import React, { useRef } from "react";
import UserDetail from "./UserDetail";
import { Link } from "react-router-dom";

const UserList = (props) => {
  console.log(props);
  const inputEl = useRef("");
  const deleteUserHandler = (id) => {
    props.getUserId(id);
  };

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
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
      <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            ref={inputEl}
            placeholder="search user"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search"> </i>
        </div>
      </div>
      <div className="ui celled list">
        {renderUD.length > 0
          ? renderUD
          : "Users not available with your serch term!"}
      </div>
      <Link to="/userReg">
        <button className="ui button blue right">Register User</button>
      </Link>
    </div>
  );
};

export default UserList;
