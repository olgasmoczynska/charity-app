import React from 'react';
import { HashRouter,  Route,  Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <HashRouter>             
      <Switch>               
      <Route exact path='/' component={Home} />
      <Route exact path='/oddaj-rzeczy' component={Form} />
      <Route exact path='/logowanie' component={Login} />
      <Route exact path='/rejestracja' component={Register} />
      <Route exact path='/wylogowano' component={Logout} />
      </Switch>           
    </HashRouter>
  )
}

export default App;
