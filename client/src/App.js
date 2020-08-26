import React, { Component } from "react";

import './index.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavMenu from "./components/general/NavMenu";
import BottomLinks from "./components/general/BottomLinks"

class App extends Component {
    render() {
      return (
        <div>
          <NavMenu />
          <BottomLinks />
        </div>
      );
    }
  }

export default App;