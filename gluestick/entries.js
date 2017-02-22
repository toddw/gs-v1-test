import mainEntry from 'src/apps/main/Index.js';
import mainRoutes from 'src/apps/main/routes.js';
import mainReducers from 'src/apps/main/reducers';
import todoEntry from 'src/apps/todo/Index.js';
import todoRoutes from 'src/apps/todo/routes.js';
import todoReducers from 'src/apps/todo/reducers';


export default {
  '/': {
    component: mainEntry,
    routes: mainRoutes,
    reducers: mainReducers,
  },
  '/todo': {
    component: todoEntry,
    routes: todoRoutes,
    reducers: todoReducers,
  },

};
