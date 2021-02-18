import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/core'
import theme from './theme';

import SignUp from '../src/pages/SignUp'
import Login from '../src/pages/Login'
import Index from '../src/pages/index'
import Upload from '../src/pages/Upload'
import NotFound from '../src/pages/NotFound'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Index} />
          <Route path="/upload" component={Upload} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
