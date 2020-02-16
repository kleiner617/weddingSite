import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
import { Formik, Field, Form, FormikHelpers, useFormik } from "formik";
import firebase from "../fire";
import * as _ from "lodash";

import { EnterFirstName } from "../Components/rsvp/enter-first-name";
import AttendanceDetails from "../Components/rsvp/attendance-details";

type Props = {};
type State = {
  firstName: string;
  lastName: string;
  isAttending: boolean | null;
  allowedPlusOne: boolean;
};

type EventType = {
  target: {
    value: string;
    id: string;
  };
};

const RSVPDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  isCheckedYes: boolean;
  isCheckedNo: boolean;
}

export const RSVPContainer: FunctionComponent<Props> = props => {
  // const [selectedGuest, setSelectedGuest] = useState<any>({
  //   firstName: "",
  //   lastName: "",
  //   id: -1,
  //   groupId: -1
  // });
  const [selectedGuest, setSelectedGuest] = useState<any>({});
  //Another state variable to increase the counter as button clicks
  const [additionalGuests, setAdditionalGuests] = useState<any[]>([]);

  const checkIfAllowedPlusOne = (firstName: string, lastName: string) => {
    firebase
      .database()
      .ref(`guests`)
      .orderByChild("lastName")
      .equalTo(lastName)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push(items[item]);
          }

          helperFunction(newState, firstName, lastName);
        }
      });
  };

  const helperFunction = (
    familyNames: any[],
    firstName: string,
    lastName: string
  ) => {
    var selectedPerson = _.remove(familyNames, function(n: any) {
      return n.firstName === firstName;
    });
    const familyGroup = familyNames.filter((person: any) => {
      return person.groupId === selectedPerson[0].groupId;
    });
    setSelectedGuest(selectedPerson[0]);
    setAdditionalGuests(familyGroup);
  };

  return (
    <RSVPDetails>
      {!selectedGuest.firstName && (
        <EnterFirstName onNextButton={checkIfAllowedPlusOne}></EnterFirstName>
      )}
      {selectedGuest.firstName && (
        <AttendanceDetails
          selectedGuest={selectedGuest}
          additionalGuests={additionalGuests}
        ></AttendanceDetails>
      )}
    </RSVPDetails>
  );
};

export default RSVPContainer;
