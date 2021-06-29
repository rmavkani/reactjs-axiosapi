import React from "react";
import icon from "./icon.png";
import { Redirect } from "react-router-dom";

const UserDetail = (props) => {
  const { id, name, mail } = props.user;
  return (
    <div className="item">
      <div className="content">
        <img className="ui avatar image" alt="" src={icon} />
        <div className="header"> Name: {name} </div>
        <div> Mail Id: {mail} </div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "Red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};
export default UserDetail;
