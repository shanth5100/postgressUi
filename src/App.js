import React from 'react';
import EmployeeForm from './components/secure/EmployeeForm';
import './App.css';
import Main from './components/nonSecure/Main';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <EmployeeForm />
      </header> */}
<BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <Main {...props} />} />
      <Route path="/user" render={props => <Main {...props} />} />
      <Route path="/table" render={props => <Main {...props} />} />
      <Route path="/admin" render={props => <Main {...props} />} />
      <Route path="/admin" render={props => <Main {...props} />} />
      <Route path="/admin" render={props => <Main {...props} />} />

      <Redirect from="/" to="/admin" />
    </Switch>
  </BrowserRouter>
      {/* <Main /> */}
    </div>
  );
}

export default App;
