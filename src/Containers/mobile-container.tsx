import * as React from "react";
import styled from "@emotion/styled";
import MenuHeader from "../Components/desktop/menu-header";
import PhotoHeader from "../Components/mobile/photo-header-mobile";
import ReceptionContainer from "./reception-container";
import RegistryContainer from "./registry-container";
import RSVPContainer from "./rsvp-container";
import CeremonyContainer from "./ceremony-container";
import Sticky from "react-sticky-el";
import MobileLayout from "../Components/mobile/mobile-nav-menu";

type Props = {};

const HomeContainerDiv = styled("div")``;

const MobileContainer = () => {
  return (
    <HomeContainerDiv>
      <MobileLayout />
      <PhotoHeader />

      <CeremonyContainer></CeremonyContainer>
      <ReceptionContainer></ReceptionContainer>
      <RegistryContainer></RegistryContainer>
      {/* <RSVPContainer></RSVPContainer> */}
    </HomeContainerDiv>
  );
};

export default MobileContainer;
