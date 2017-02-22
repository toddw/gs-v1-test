import React from "react";
import { shallow } from "enzyme";

import TodoListItem from "apps/main/components/TodoListItem";

describe("apps/main/components/TodoListItem", () => {
  it("renders without an issue", () => {
    const subject = <TodoListItem />;
    const wrapper = shallow(subject);
    expect(wrapper).toBeDefined();
  });
});
