import React from "react";
import ReactDom from "react-dom";
import WebFont from "webfontloader";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
const axios = require("axios");

WebFont.load({
  google: {
    families: ["Oswald", "sans-serif"]
  }

});
//  Math.random().toString(36).substr(2, 10)

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <AppRoutes/>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("react-app"));
