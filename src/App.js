import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SignInPage from './SignInPage/SignInPage';
import Posts from './PostsContainer/Posts';
import DummyPostsPage from './PostsContainer/DummyPostsPage';
import DummyCardContainer from "./CardContainer/DummyCardContainer";
import CardContainer from "./CardContainer/CardContainer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/cardContainer">
            <CardContainer />
          </Route>
          <Route path="/dummyCard">
            <DummyCardContainer />
          </Route>
          <Route path="/mainPage">
            <DummyPostsPage />
            <Posts />
          </Route>
          <Route path="/">
            <SignInPage />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
