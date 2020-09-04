import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PortfolioContext } from "./context";

import Nav from "./components/shared/Nav";
// Pages
import Home from "./pages/Home";
import Works from "./pages/Works";
import Work from "./pages/Work";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Error from "./pages/Error";

function App() {
  const { works, blogs } = useContext(PortfolioContext);
  console.log(works);
  console.log(blogs);

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
            <Work />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/blogs/:name">
            <Blog />
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
