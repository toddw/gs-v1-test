/* @flow */

import React, { Component } from "react";
import { Link } from "react-router";

export default class Home extends Component {
  render () {
    return (
      <div>
        <h1>Welcome to my test app!</h1>
        <Link to="/todo-list">View Todo List</Link>
      </div>
    );
  }
}
