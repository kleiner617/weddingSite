import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
// import { Form, Button } from "react-bootstrap";
import { Formik, Field, Form, FormikHelpers, useFormik } from "formik";
import firebase from "../../fire";
import { allGuests } from "./test-data";
import * as _ from "lodash";

type Props = {
  onNextButton: (firstName: string, lastName: string) => void;
};
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
const MyForm = (props: any) => {
  // Declare a new state variable, which we'll call "count"
  //It will help in dyamically add and render our input box
  const [count, setCount] = useState<number[]>([]);
  //Another state variable to increase the counter as button clicks
  const [counter, setCounter] = useState<number>(0);

  let { handleSubmit, handleChange, handleBlur } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <Field id="firstName" name="firstName" placeholder="John" type="text" />

      <label htmlFor="lastName">Last Name</label>
      <Field id="lastName" name="lastName" placeholder="Doe" type="text" />

      <button type="submit" style={{ display: "block" }}>
        Next
      </button>
    </form>
  );
};

export const EnterFirstName: FunctionComponent<Props> = props => {
  //   const addAllDataToDB = (e: any) => {
  //     allGuests.forEach((item, index) => {
  //       const itemsRef = firebase.database().ref("guests");
  //       //   const guest = {
  //       //     firstName: item.firstname,
  //       //     lastName: "Fred"
  //       //   };
  //       itemsRef.push(item);
  //     });

  //     // allGuests.forEach;
  //   };

  const checkIfAllowedPlusOne = (firstName: string, lastName: string) => {
    // ref
    //   .child("users")
    //   .orderByChild("ID")
    //   .equalTo("U1EL5623")
    //   .once("value", snapshot => {
    //     if (snapshot.exists()) {
    //       const userData = snapshot.val();
    //       console.log("exists!", userData);
    //     }
    //   });

    // const itemsRef = firebase.database().ref("guests");
    // itemsRef.on("value", snapshot => {
    //   let items = snapshot.val();
    //   let newState = [];
    //   console.log(items);
    //   for (let item in items) {
    //     newState.push({
    //       id: item,
    //       firstName: items[item].firstName,
    //       lastName: items[item].lastName
    //     });
    //   }
    //   console.log(newState);
    // });

    firebase
      .database()
      .ref(`guests`)
      .orderByChild("lastname")
      .equalTo(lastName)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push(items[item]);
          }
          // data exist, do something else

          //   Gets all matching last names...
          // Then want to filter out based on first name + family ids...
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
      return n.firstname === firstName;
    });
    const familyGroup = familyNames.filter((person: any) => {
      return person.groupid === selectedPerson[0].groupid;
    });
  };

  const submitNames = (values: any, { setSubmitting }: any) => {
    props.onNextButton(values.firstName, values.lastName);
    setSubmitting(false);
  };

  return (
    <RSVPDetails id="rsvp">
      <div>Will you be celebrating with us?</div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        onSubmit={submitNames}
        render={props => <MyForm {...props} />} /*Render  Form component */
      />
    </RSVPDetails>
  );
};

export default EnterFirstName;
