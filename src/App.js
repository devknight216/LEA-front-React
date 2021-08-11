import React from 'react'
import './App.css';
import MainLayout from 'views/mainlayout';
import MouseParticles from 'react-mouse-particles';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import DashboardMainLayout from 'admin/mainlayout';
import SigninPage from 'views/signin';
import { useDispatch } from 'react-redux';
import { getAllProperties } from 'reduxstore/propertyreducer/slice'

function App() {
  //testing redux
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch( getAllProperties() );
  },[])

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
        <MouseParticles g={3} num={4} radius={5} color={["#ffff00"]} life={0.8} cull="stats,image-wrapper" level={6} />
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
