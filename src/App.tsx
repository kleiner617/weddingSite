import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DesktopContainer from "./Containers/home-container";
import MobileContainer from "./Containers/mobile-container";
import CeremonyContainer from "./Containers/ceremony-container";
import ReceptionContainer from "./Containers/reception-container";
import RegistryContainer from "./Containers/registry-container";
import RSVPContainer from "./Containers/rsvp-container";
import "./App.css";
import { useMediaQuery } from "react-responsive";

// const App: React.FC = () => {
//   return (
//     <div>
//       <DesktopContainer />
//       <MobileContainer />
//       {/* <Route path="/" component={HomeContainer} /> */}
//       {/* <Router>
//         <div>
//           <Route path="/cermony" component={CeremonyContainer} />
//           <Route path="/reception" component={ReceptionContainer} />
//           <Route path="/registry" component={RegistryContainer} />
//           <Route path="/rsvp" component={RSVPContainer} />
//         </div>
//       </Router> */}
//     </div>
//   );
// };

const App = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)"
  });
  const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)"
  });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const whichContainer = isDesktopOrLaptop ? DesktopContainer : MobileContainer;

  return (
    <div>
      <Router>
        <div>
          <Route path="/" component={whichContainer} />
          <Route path="/rsvp" component={RSVPContainer} />
        </div>
      </Router>
    </div>
  );
};

export default App;
