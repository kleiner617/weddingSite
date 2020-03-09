import React, { FunctionComponent, useState, useReducer } from "react";
import styled from "@emotion/styled";

import { Formik, Field } from "formik";
import { Checkbox } from "../checkbox";

// import { EnterFirstName } from "../Components/rsvp/enter-first-name";

type Props = {
  guestList: any;
};
type State = {
  guestList: any;
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

const reducer = (state: any, action: any) => {
  return {
    ...state,
    ...action.payload
  };
};

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
const FormDetails = (props: any) => {
  const { guestList } = props;

  return (
    <form onSubmit={props.handleSubmit}>
      {guestList.map((guest: any, index: number) => {
        return (
          <ResponseSection>
            <div>{guest.firstName}</div>
            <div>{guest.lastName}</div>
            <div>
              <Checkbox
                name={`no.${index}`}
                value={!!props.checkboxState[`no.${index}`]}
                onChange={props.onChange}
                label={"yes"}
                isDisabled={false}
              />
              <Checkbox
                name={`yes.${index}`}
                value={!!props.checkboxState[`yes.${index}`]}
                onChange={props.onChange}
                label={"no"}
                isDisabled={false}
              />
            </div>
          </ResponseSection>
        );
      })}

      {guestList.length === 1 && guestList[0].allowedPlusOne && (
        <div>
          {/* TODO: ERK, add a checkbox here, please */}

          <div>
            Will you be bringing a plus one?
            <Checkbox
              name="plusOneCheckbox"
              value={!!props.checkboxState["plusOneCheckbox"]}
              onChange={props.onChange}
              label={"yes"}
              isDisabled={false}
            />
          </div>
          {!!props.checkboxState["plusOneCheckbox"] && (
            <div>
              <form onSubmit={props.handleSubmit}>
                <label htmlFor="guestFirstName">First Name</label>
                <Field
                  id="guestFirstName"
                  name="guestFirstName"
                  placeholder=""
                  type="text"
                />

                <label htmlFor="guestFirstName">Last Name</label>
                <Field
                  id="guestLastName"
                  name="guestLastName"
                  placeholder=""
                  type="text"
                />
              </form>
            </div>
          )}
        </div>
      )}

      <div></div>
      <label htmlFor="additionalInfo">Anything else we need to know?</label>
      <Field type="text" name="additionalInfo"></Field>

      <button type="submit" style={{ display: "block" }}>
        Submit
      </button>
    </form>
  );
};

export const AttendanceDetails: FunctionComponent<Props> = props => {
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);
  const { guestList } = props;

  const submitNames = (values: any) => {
    //   checkIfAllowedPlusOne(values.firstName, values.lastName);

    const savingList = props.guestList.map((guestList: any, index: number) => {
      let plusOne = null;
      if (values.guestFirstName) {
        plusOne = values.guestFirstName + " " + values.guestLastName;
      }
      console.log(values);
      return {
        ...guestList,
        plusOne: plusOne,
        additionalInfo: values.additionalInfo || "",
        willBeAttending: !!state[`yes.${index}`]
      };
    });
    console.log(savingList);

    // setSubmitting(false);
  };

  const onCheckboxChange = (value: boolean, checkboxName: string) => {
    const idArray = checkboxName.split(".");
    const yesNoCheckbox = idArray[0];
    const id = idArray[1];

    if (yesNoCheckbox === "yes") {
      dispatch({ payload: { [checkboxName]: value, [`no.${id}`]: false } });
    }
    if (yesNoCheckbox === "no") {
      dispatch({ payload: { [checkboxName]: value, [`yes.${id}`]: false } });
    }

    dispatch({ payload: { [checkboxName]: value } });
  };

  return (
    <RSVPDetails id="rsvp">
      <div> Will you be attending?</div>
      <Formik
        initialValues={{}}
        onSubmit={submitNames}
        render={props => (
          <FormDetails
            guestList={guestList}
            onChange={onCheckboxChange}
            checkboxState={state}
            {...props}
          />
        )} /*Render  Form component */
      />
    </RSVPDetails>
  );
};

export default AttendanceDetails;
