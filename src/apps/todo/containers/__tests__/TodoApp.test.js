/* @flow */

import React from "react";
import { shallow } from "enzyme";

import { TodoApp } from "apps/todo/containers/TodoApp";

describe("apps/todo/containers/TodoApp", () => {
  it("renders without an issue", () => {
    const subject = <TodoApp addTodo={() => null} removeTodo={() => null} items={["hi", "bye"]} />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
