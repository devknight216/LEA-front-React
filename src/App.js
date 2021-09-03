import React from 'react'
import './App.css';
import MainLayout from 'views/mainlayout';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DashboardMainLayout from 'admin/mainlayout';
import SigninPage from 'views/signin';
import SignupPage from 'views/signup';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div>
      <Router>
        <Switch>         
          <Route exact path="/signin">
            <SigninPage/>
          </Route>  
          <Route exact path="/signup">
            <SignupPage/>
          </Route>
            <AdminRoute path="/admin">
            <DashboardMainLayout/>
          </AdminRoute>
          <Route path="/">
            <MainLayout/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


function AdminRoute({ children,  isAuth, ...rest}) {
  const authUser = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  let auth = false;
  if(token && authUser.role === 'admin'){
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