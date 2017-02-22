/* @flow */

type State = Array<string>;

const INITIAL_STATE: State = ["First", "second", "3rd"];

export default (state: State = INITIAL_STATE, action: { type: string, payload?: any }) => {
  switch (action.type) {
    default:
      return state;
  }
};
