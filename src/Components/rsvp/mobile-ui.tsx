import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";

import EnterFirstNameMobile from "./enter-first-name-mobile";
import AttendanceDetailsMobile from "./attendance-details-mobile";

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

export const MobileUI: FunctionComponent<Props> = props => {
  const { guestList, getPossibleGuests, onSaveRSVP, isValidName } = props;
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
            isValidName={isValidName}
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

export default MobileUI;
