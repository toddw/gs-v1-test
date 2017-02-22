/* @flow */

import React, { Component } from "react";

export default class TodoList extends Component {
  props: {
    items: Array<string>,
    addTodo: Function,
    removeTodo: Function
  };

  render () {
    return (
      <div>Test</div>
    );
  }
}
