import React, {lazy, Suspense, Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import {Spinner} from './components/Spinner'

const PlaceCard = lazy(() => import('./components/PlaceCard'));
const PlaceSearch = lazy(() => import('./components/PlaceSearch'));
const NotFound = lazy(() => import('./components/notFound'));

class App extends Component {
  render() {
    return (
      <Router>
      <Suspense fallback={<Spinner size="large" />}>
      <div>
        <Switch>
            <Route exact path="/" component={ props => <PlaceCard {...props}/>}/>
            <Route path="/search/:id" component={props => <PlaceSearch {...props}/>}/>
            <Route component={props => <NotFound {...props}/>}/>
        </Switch>
      </div>
      </Suspense>
      </Router>
    );
  }
}

export default App;