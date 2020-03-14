import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

// import { FirebaseContext, withFirebase } from "../Components/firebase";

import { EnterFirstName } from "./enter-first-name";
import AttendanceDetails from "./attendance-details";

type Props = {
  guestList: any;
  getPossibleGuests: any;
  onSaveRSVP: any;
  isValidName: string;
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

export const DesktopUI: FunctionComponent<Props> = props => {
  const { guestList, getPossibleGuests, onSaveRSVP, isValidName } = props;
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "'Open Sans Condensed', sans-serif"
      }}
    >
      <RSVPDetails style={{ padding: "60px" }}>
        {!guestList.length && (
          <EnterFirstName
            onNextButton={getPossibleGuests}
            isValidName={isValidName}
          ></EnterFirstName>
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

export default DesktopUI;
