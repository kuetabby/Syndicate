import React, {lazy, Suspense, Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';

const PlaceCard = lazy(() => import('./components/PlaceCard'));
const MapBox = lazy(() => import('./components/MapBox'));
const NotFound = lazy(() => import('./components/notFound'));

class App extends Component {
  render() {
    return (
      <Router>
      <Suspense fallback={<div> ... Loading </div>}>
      <div>
        <nav className=" bg-light-gray dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10">
          <div className="dtc dn-ns w-third"></div>
          <div id="menu" className="dtc v-mid mid-gray link dim w-five w-50-ns tc tl-ns mb2 mb0-ns">
            <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/Search">Search List</Link>
            <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/MapState">Map State</Link>
          </div>
        </nav>
        <Switch>
            <Route exact path="/" component={PlaceCard}/>
            <Route path="/Search" component={PlaceCard}/>
            <Route path="/MapState" component={MapBox}/>
            <Route component={NotFound}/>
        </Switch>
        </div>
      </Suspense>
      </Router>
    );
  }
}

export default App;
