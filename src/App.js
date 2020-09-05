import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/shared/Nav";
// Pages
import Home from "./pages/Home";
import Works from "./pages/Works";
import SingleWork from "./pages/SingleWork";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/SingleBlog";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/works" exact>
            <Works />
          </Route>
          <Route path="/works/:id">
            <SingleWork />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/blogs/:name">
            <SingleBlog />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
