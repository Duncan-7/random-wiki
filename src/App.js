import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListContainer from './containers/ListContainer/ListContainer';
import Article from './components/Article/Article';
import './App.css';

function App() {
  const routes = (
    <Switch>
      <Route path="/articles/:id" component={Article} />
      <Route path="/" exact component={ListContainer} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
