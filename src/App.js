import React from 'react'
import './App.css';
import MainLayout from 'views/mainlayout';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import DashboardMainLayout from 'admin/mainlayout';
import SigninPage from 'views/signin';

function App() {

  return (
    <div>
      <Router>
        <Switch>         
          <Route exact path="/signin">
            <SigninPage/>
          </Route>
          <PrivateRoute path="/admin">
            <DashboardMainLayout/>
          </PrivateRoute>
          <Route path="/">
            <MainLayout/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


function PrivateRoute({ children,  isAuth, ...rest}) {
  let auth = false;
  const authinfo = localStorage.getItem('isAuth');
  console.log(authinfo)
  if(authinfo == 'admin'){
    auth = true;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
