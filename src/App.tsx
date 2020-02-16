import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DesktopContainer from "./Containers/home-container";
import MobileContainer from "./Containers/mobile-container";
import RSVPContainer from "./Containers/rsvp-container";
import "./App.css";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const isNotMobile = useMediaQuery({ minWidth: 768 });

  const whichContainer =
    isDesktop || isTablet ? DesktopContainer : MobileContainer;

  return (
    <div>
      {/* <Switch> */}
      <Route path="/" component={whichContainer} />
      {/* <Route path="/rsvp" component={RSVPContainer} /> */}
      <Route path="/rsvp" component={RSVPContainer} />
      {/* </Switch> */}
    </div>
  );
};

export default App;
