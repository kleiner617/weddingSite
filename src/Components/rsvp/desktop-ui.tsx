import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
import StickyHeader from "../../Components/desktop/sticky-header";
import { withRouter } from "react-router-dom";
import MobileNavMenu from "../../Components/mobile/mobile-nav-menu";

// import { FirebaseContext, withFirebase } from "../Components/firebase";

import { EnterFirstName } from "./enter-first-name";
import AttendanceDetails from "./attendance-details";

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

export const RSVPContainer: FunctionComponent<Props> = props => {
  const { guestList, getPossibleGuests, onSaveRSVP } = props;
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Open Sans Condensed', sans-serif"
      }}
    >
      <RSVPDetails style={{ padding: "60px" }}>
        {!guestList.length && (
          <EnterFirstName onNextButton={getPossibleGuests}></EnterFirstName>
        )}
        {!!guestList.length && (
          <AttendanceDetails
            guestList={guestList}
            onSave={onSaveRSVP}
          ></AttendanceDetails>
        )}
      </RSVPDetails>
    </div>
  );
};

export default withRouter(RSVPContainer);
