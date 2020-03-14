import React from "react";
import { Route } from "react-router-dom";

import DesktopContainer from "./Containers/home-container";
import MobileContainer from "./Containers/mobile-container";
import RSVPContainer from "./Containers/rsvp-container";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({
    minWidth: 768,
    maxWidth: 991
  });

  const whichContainer =
    isDesktop || isTablet ? DesktopContainer : MobileContainer;

  const onSaveSucceeded = () => {
    toast.success("Thanks for the RSVP!  Can't wait to see you there!", {
      position: toast.POSITION.TOP_CENTER
    });
  };
  return (
    <div>
      {/* <Switch> */}
      <Route exact path="/" component={whichContainer} />
      <Route
        exact
        path="/rsvp"
        render={(props: any) => (
          <RSVPContainer
            isMobile={!isDesktop && !isTablet}
            saveSucceeded={onSaveSucceeded}
          />
        )}
      />
      {/* </Switch> */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
