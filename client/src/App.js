import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';

import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import { getLoggedinUser, noToken } from './actions/auth';
import Contact from './components/contacts/Contact';
import PrivateRoute from './components/routing/PrivateRoute';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    
    if(localStorage.token) {
      store.dispatch(getLoggedinUser());
    } else {
      store.dispatch(noToken());
    }

  }, [])


  return (
    <Provider store={store} >
      <Router>
        <Fragment>
            <Navbar />
            <section className="container">
              <Alert/>
              <Switch>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <PrivateRoute exact path='/' component={Contact} />
              </Switch>
            </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
