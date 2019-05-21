import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Clock from "./Clock";
import NoClock from "./NoClock";

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul className='menu'>
              <Link to="/">Clock</Link>
              <Link to="/relax">No Clock</Link>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Clock} />
            <Route path="/relax" component={NoClock} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
