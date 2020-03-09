import React, { FunctionComponent, useState } from "react";
import styled from "@emotion/styled";
// import { Form, Button } from "react-bootstrap";

type Props = {
  onNextButton: (invitationName: string) => void;
};

const RSVPDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

const RSVPQuestion = styled("div")`
  font-size: 24px;
`;

export const EnterFirstName: FunctionComponent<Props> = props => {
  const [invitationName, setInvitationName] = useState<string>("");
  const [enableButton, setEnableButton] = useState<boolean>(false);

  const onInvitationNameBlur = (e: any) => {
    setInvitationName(e.currentTarget.value || "");
  };
  const onInvitationNameChange = (e: any) => {
    if (e.currentTarget.value && e.currentTarget.value.length > 0) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  };

  const submitName = () => {
    props.onNextButton(invitationName);
  };

  // TODO: ERK, style this and actually make it look good, please
  return (
    <RSVPDetails id="rsvp">
      <RSVPQuestion>Please Enter the Name on your invitation</RSVPQuestion>
      <input
        type="text"
        id="invitationName"
        name="invitationName"
        onBlur={onInvitationNameBlur}
        onChange={onInvitationNameChange}
      />
      <button
        type="submit"
        style={{ display: "block" }}
        onClick={submitName}
        disabled={!enableButton}
      >
        Next
      </button>
    </RSVPDetails>
  );
};

export default EnterFirstName;
