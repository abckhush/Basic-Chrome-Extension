import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home.js';
import Login from './Components/Login.js';
import Signup from './Components/SignUp.js';

const App = () => {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
    </Router>
  );
};

export default App;
