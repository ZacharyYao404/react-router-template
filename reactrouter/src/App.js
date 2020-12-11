import React, { memo } from 'react';
import{Provider} from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "./router";
import store from "./store"
import HYHeader from "./components/app-header/index";
import HYFooter from "./components/app-footer/index";



export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <HYHeader />
      {renderRoutes(routes)}
      <HYFooter />
    </HashRouter>
      </Provider>
    
  )
})

