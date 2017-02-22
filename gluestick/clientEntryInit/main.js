import getRoutes from "src/apps/main/routes.js";
import EntryWeapper from "../EntryWrapper";
import { createStore } from "gluestick-shared";
import middleware from "config/redux-middleware";

import 'src/apps/main/Index.js';

export const getStore = (httpClient) => {
  return createStore(
    httpClient,
    () => require('apps/main/reducers/index'),
    middleware,
    (cb) => module.hot && module.hot.accept('../../src/apps/main/reducers', cb),
    !!module.hot
  );
};

if (typeof window === "object") {
  EntryWeapper.start(getRoutes, getStore);
}
