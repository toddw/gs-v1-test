/* @flow */

import React from "react";
import { Route, IndexRoute } from "react-router";
import { ROUTE_NAME_404_NOT_FOUND } from "gluestick-shared";

import MasterLayout from "./components/MasterLayout";
import TodoApp from "./containers/TodoApp";
import NoMatchApp from "./containers/NoMatchApp";

export default function routes (/*store: Object, httpClient: Object*/) {
  return (
    <Route name="app" component={MasterLayout} path="/todo">
      <IndexRoute name="home" component={TodoApp} />
      <Route name={ROUTE_NAME_404_NOT_FOUND} path="*" component={NoMatchApp} />
    </Route>
  );
}

