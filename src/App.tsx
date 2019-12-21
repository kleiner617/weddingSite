import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeContainer from "./Containers/home-container";
import CeremonyContainer from "./Containers/ceremony-container";
import ReceptionContainer from "./Containers/reception-container";
import RegistryContainer from "./Containers/registry-container";
import RSVPContainer from "./Containers/rsvp-container";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <HomeContainer />
      {/* <Route path="/" component={HomeContainer} /> */}
      {/* <Router>
        <div>
          <Route path="/cermony" component={CeremonyContainer} />
          <Route path="/reception" component={ReceptionContainer} />
          <Route path="/registry" component={RegistryContainer} />
          <Route path="/rsvp" component={RSVPContainer} />
        </div>
      </Router> */}
    </div>
  );
};

export default App;
