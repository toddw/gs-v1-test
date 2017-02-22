/* @flow */

import reducer from "apps/todo/reducers/todos";

describe("apps/todo/reducers/todos", () => {
  it("returns the initial state", () => {
    const state = [];
    expect(
      reducer([], {
        type: '_TEST_ACTION'
      })
    ).toEqual({});
  });
});
