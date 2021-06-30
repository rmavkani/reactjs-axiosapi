import React from "react";
import { Link } from "react-router-dom";
import icon from "./icon.png";

const UserDetail = (props) => {
  const { id, name, mail } = props.user;
  return (
    <div className="item">
      <img className="ui avatar image" alt="" src={icon} />
      <div className="content">
        <Link to={{ pathname: `/userReg/${id}`, state: { user: props.user } }}>
          <div className="header"> Name: {name} </div>
          <div> Mail Id: {mail} </div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "Red", marginTop: "7px", marginLeft: "25px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={{ pathname: `/update`, state: { user: props.user } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>{" "}
      </Link>
    </div>
  );
};
export default UserDetail;
