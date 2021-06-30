import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import UserRegistration from "./UserRegistration";
import UserList from "./UserList";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";
import About from "./About";
import api from "./api/users";
import UserUpdate from "./UserUpdate";

function App() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState([]);

  //Retrieve Users from DB
  const retrieveUsers = async () => {
    const response = await api.get("/users");
    return response.data;
  };

  const addUserHandler = async (user) => {
    const req = {
      id: uuid(),
      ...user
    };
    const res = await api.post("/users", req);
    setUsers([...users, res.data]);
  };

  const updateUserHandler = async (user) => {
    const resp = await api.put(`/users/${user.id}`, user);
    const { id, name, mail } = resp.data;
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...resp.data } : user;
      })
    );
  };

  const deleteUserHandler = async (id) => {
    await api.delete(`/users/${id}`);
    const newUserlist = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUserlist);
  };

  useEffect(() => {
    //const retrieveUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //setUsers(retrieveUser);
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers);
    };
    getAllUsers();
  }, []);
  useEffect(() => {
    //    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <Header place="Chennai-92" />
      <div className="ui container segment center">
        <Router>
          <Link to="/">
            <button className="ui button blue right">Home</button>
          </Link>
          <Link to="/aboutus">
            <button className="ui button blue right">About Us</button>
          </Link>
          <Link to="/userList">
            <button className="ui button blue right">Admin</button>
          </Link>
          <Switch>
            <Route path="/aboutus" exact component={About} />
            <Route
              path="/userReg"
              exact
              render={(props) => (
                <UserRegistration {...props} addUserHandler={addUserHandler} />
              )}
            />
            <Route
              path="/update"
              exact
              render={(props) => (
                <UserUpdate {...props} updateUserHandler={updateUserHandler} />
              )}
            />
            <Route
              path="/userList"
              exact
              render={(props) => (
                <UserList
                  {...props}
                  users={users}
                  getUserId={deleteUserHandler}
                />
              )}
            />
            {/* <Route
            path="/userReg"
            exact
            component={() => (
              <UserRegistration addUserHandler={addUserHandler} />
            )}
          />
          <Route
            path="/userList"
            exact
            component={() => (
              <UserList users={users} getUserId={deleteUserHandler} />
            )}
          />*/}
          </Switch>

          <Contact phone="9742237223" />
          <Footer website="https://seyon-homoeo-clinic.business.site/" />
        </Router>
      </div>
    </div>
  );
}
export default App;

/*class App extends React.Component {
  constructor() {
    super();
    this.state = { doctorName: "Ramya Devi T" };
  }
  render() {
    return (
      <div className="ui container">
        <h1>Welcome!</h1>
        <Header place="Chennai" />
        <Footer doctorName={this.state.doctorName} />
        <Contact phone="9742237223" />
        <UserForm />
      </div>
    );
  }
} */
