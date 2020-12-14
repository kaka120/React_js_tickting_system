import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { history } from './Helpers/history';
// import { PrivateRoute } from './Components/PrivateRoute';
import  Login  from './SharableModules/Login/Login';
import  Body  from './SharableModules/Body/Body';
//import './App.css';

function App() {
  return (
    <div className="">
          <Router history={history}>
              <Switch>
                  {/* <PrivateRoute exact path="/body" component={Body}/> */}
                  <Route path="/login" component={Login}></Route>
                  {/* <Redirect from="*" to="/body" /> */}
                  <Route path="/body" component={Body}></Route>
              </Switch>
          </Router>
</div>
  );
}



export default App;

/*
import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2">

                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage} />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export { App }*/
