import React from 'react';
// import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Mypage from './pages/mypage';

function App() {

  return (
    <Router>
      <Route exact path="/" render={() => <Signup />} />
      <Route path="/mypage" render={() => <Mypage />} />
    </Router>
  );
}

export default App;
