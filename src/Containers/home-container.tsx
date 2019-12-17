import * as React from "react";
import MenuHeader from "../Components/menu-header";
import PhotoHeader from "../Components/photo-header";
import ReceptionContainer from "./reception-container";
import RegistryContainer from "./registry-container";
import RSVPContainer from "./rsvp-container";
import CeremonyContainer from "./ceremony-container";

type Props = {};

export class HomeContainer extends React.PureComponent<Props> {
  getInitialState = () => {
    return {
      resume: false
    };
  };

  render() {
    return (
      <React.Fragment>
        <PhotoHeader></PhotoHeader>
        <CeremonyContainer></CeremonyContainer>
        <ReceptionContainer></ReceptionContainer>
        <RegistryContainer></RegistryContainer>
        <RSVPContainer></RSVPContainer>
      </React.Fragment>
    );
  }
}

export default HomeContainer;
