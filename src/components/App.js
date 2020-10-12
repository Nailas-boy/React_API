import React, { Component } from "react";
import Route from "./Route";
import Header from "./layout/Header";
import Unsplash from "./unsplash/Unsplash";
import Youtube from "./youtube/Youtube";
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/">
          <Header />
        </Route>
        <Route path="/unsplash">
          <Unsplash />
        </Route>
        <Route path="/youtube">
          <Youtube />
        </Route>
      </div>
    );
  }
}
export default App;