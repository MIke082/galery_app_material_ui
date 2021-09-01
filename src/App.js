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
// import PostsPage from './PostsContainer/PostsPage';

// import InstagramEmbed from 'react-instagram-embed';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* <Route path="/createNewPost">
            <CreateNewPostContainer />
          </Route>
          <Route path="/card">
            <CardContainer />
          </Route> */}
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
