import * as React from "react";
import styled from "@emotion/styled";
import MenuHeader from "../Components/menu-header";
import PhotoHeader from "../Components/photo-header";
import ReceptionContainer from "./reception-container";
import RegistryContainer from "./registry-container";
import RSVPContainer from "./rsvp-container";
import CeremonyContainer from "./ceremony-container";
import Sticky from "react-sticky-el";
import MobileLayout from "../Components/mobile-nav-menu";

type Props = {};

const HomeContainerDiv = styled("div")``;

export class HomeContainer extends React.PureComponent<Props> {
  getInitialState = () => {
    return {
      resume: false
    };
  };

  render() {
    return (
      <HomeContainerDiv>
        <MobileLayout />
        {/* <PhotoHeader />
        <Sticky topOffset={80}>
          <MenuHeader />
        </Sticky>
        <CeremonyContainer></CeremonyContainer>
        <ReceptionContainer></ReceptionContainer>
        <RegistryContainer></RegistryContainer>
        <RSVPContainer></RSVPContainer> */}
      </HomeContainerDiv>
    );
  }
}

export default HomeContainer;
