import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';


import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

const App = () => {
  return (
    <Provider store={store} >
      <Router>
        <Fragment>
            <Navbar />
            <section className="container">
              <Alert/>
              <Switch>
                <Route exact path='/register' component={Register} />

              </Switch>
            </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
