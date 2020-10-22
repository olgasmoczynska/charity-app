import React from 'react';
import { HashRouter,  Route,  Link,  Switch,  NavLink } from 'react-router-dom';
import Home from './components/Home';
import Local from './components/Local';
import LoggedIn from './components/LoggedIn';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
  return (
    <HashRouter>             
      <Switch>               
      <Route exact path='/' component={Home}/>
      <Route exact path='/oddaj-rzeczy'><Form /></Route>
      <Route exact path='/logowanie'><Login /></Route>
      <Route exact path='/rejestracja'><Register /></Route>
      <Route exact path='/wylogowano'><Logout /></Route>
      </Switch>           
    </HashRouter>
  )
}

export default App;
