import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
// import { Form, Button } from "react-bootstrap";
import { Formik, Field, Form, FormikHelpers, useFormik } from "formik";

// import { EnterFirstName } from "../Components/rsvp/enter-first-name";

type Props = {
  selectedGuest: any;
  additionalGuests: any;
};
type State = {
  selectedGuest: any;
  additionalGuests: any;
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

const ResponseSection = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  isCheckedYes: boolean;
  isCheckedNo: boolean;
}
const FormDetails = (props: any) => {
  const { selectedGuest, additionalGuests } = props;
  console.log(props);
  return (
    <form onSubmit={props.handleSubmit}>
      <ResponseSection>
        <div>{selectedGuest.firstName}</div>
        <div>{selectedGuest.lastName}</div>
        <div>
          <label htmlFor="isCheckedYes">Yes</label>
          <Field type="checkbox" name="isCheckedYes"></Field>
          <label htmlFor="isCheckedNo">No</label>
          <Field type="checkbox" name="isCheckedNo"></Field>
        </div>
      </ResponseSection>

      <div></div>
      <label htmlFor="additionalInfo">Anything else we need to know?</label>
      <Field type="text" name="additionalInfo"></Field>

      <button type="submit" style={{ display: "block" }}>
        Submit
      </button>
    </form>
  );
};

const submitNames = (values: any, { setSubmitting }: any) => {
  //   checkIfAllowedPlusOne(values.firstName, values.lastName);
  alert(values);
  setSubmitting(false);
  // setTimeout(() => {
  //   alert(JSON.stringify(values, null, 2));
  //   setSubmitting(false);
  // }, 400);
};

export const AttendanceDetails: FunctionComponent<Props> = props => {
  const { selectedGuest, additionalGuests } = props;

  return (
    <RSVPDetails id="rsvp">
      <div> Will you be attending?</div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: ""
        }}
        onSubmit={submitNames}
        render={props => (
          <FormDetails
            selectedGuest={selectedGuest}
            additionalGuests={additionalGuests}
            {...props}
          />
        )} /*Render  Form component */
      />

      {/* <div className="container">
        <h1>Formik x TypeScript</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            isCheckedYes: false,
            isCheckedNo: false
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
          render={() => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="John"
                type="text"
              />

              <label htmlFor="lastName">Last Name</label>
              <Field
                id="lastName"
                name="lastName"
                placeholder="Doe"
                type="text"
                onBlur={(values: Values) => {
                  alert(values.lastName);
                }}
              />

              <div> Will you be attending?</div>
              <label htmlFor="isCheckedYes">Yes</label>
              <Field type="checkbox" name="isCheckedYes"></Field>
              <label htmlFor="isCheckedNo">No</label>
              <Field type="checkbox" name="isCheckedNo"></Field>

              <div></div>
              <label htmlFor="additionalInfo">
                Anything else we need to know?
              </label>
              <Field type="text" name="additionalInfo"></Field>

              <button type="submit" style={{ display: "block" }}>
                Submit
              </button>
            </Form>
          )}
        />
      </div> */}
    </RSVPDetails>
  );
};

export default AttendanceDetails;
