import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Home, Search, Mine, Repos } from "./screens";

const Index = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/mine" component={Mine} />
        <Route path="/repos" component={Repos} />
      </div>
    </Router>
  </Provider>
);

render(<Index />, document.getElementById('root'));