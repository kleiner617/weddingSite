import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
import StickyHeader from "../../Components/desktop/sticky-header";
import { withRouter } from "react-router-dom";
import MobileNavMenu from "../../Components/mobile/mobile-nav-menu";

// import { FirebaseContext, withFirebase } from "../Components/firebase";

import EnterFirstNameMobile from "./enter-first-name-mobile";
import AttendanceDetailsMobile from "./attendance-details-mobile";

type Props = {
  guestList: any;
  getPossibleGuests: any;
  onSaveRSVP: any;
};
type State = {
  firstName: string;
  lastName: string;
  isAttending: boolean | null;
  allowedPlusOne: boolean;
};

const RSVPDetails = styled("div")``;

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  isCheckedYes: boolean;
  isCheckedNo: boolean;
}

export const MobileUI: FunctionComponent<Props> = props => {
  const { guestList, getPossibleGuests, onSaveRSVP } = props;
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Open Sans Condensed', sans-serif"
      }}
    >
      <RSVPDetails style={{ padding: "30px 15px" }}>
        {!guestList.length && (
          <EnterFirstNameMobile
            onNextButton={getPossibleGuests}
          ></EnterFirstNameMobile>
        )}
        {!!guestList.length && (
          <AttendanceDetailsMobile
            guestList={guestList}
            onSave={onSaveRSVP}
          ></AttendanceDetailsMobile>
        )}
      </RSVPDetails>
    </div>
  );
};

export default withRouter(MobileUI);
