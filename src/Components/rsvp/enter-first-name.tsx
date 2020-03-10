import React, { FunctionComponent, useState } from "react";
import { Button, Form } from "react-bootstrap";
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
  font-size: 36px;
`;

export const EnterFirstName: FunctionComponent<Props> = props => {
  const [invitationName, setInvitationName] = useState<string>("");
  const [enableButton, setEnableButton] = useState<boolean>(false);

  const onInvitationNameChange = (e: any) => {
    if (e.currentTarget.value && e.currentTarget.value.length > 0) {
      setEnableButton(true);
      setInvitationName(e.currentTarget.value);
    } else {
      setEnableButton(false);
    }
  };

  const submitName = () => {
    props.onNextButton(invitationName);
  };

  return (
    <RSVPDetails id="rsvp">
      <RSVPQuestion>Please Enter the Name on your invitation</RSVPQuestion>

      <Form onSubmit={submitName}>
        <Form.Group controlId="formBasicText">
          <Form.Control
            type="text"
            value={invitationName}
            placeholder="Mr. and Mrs. John Doe"
            onChange={onInvitationNameChange}
            style={{
              width: "60%",
              fontSize: "24px",
              margin: "20px auto"
            }}
          />
        </Form.Group>
        <Button
          variant="outline-primary"
          type="button"
          disabled={!enableButton}
          style={{
            width: "100px",
            fontSize: "24px",
            float: "right",
            marginTop: "100px"
          }}
          onClick={submitName}
        >
          Next
        </Button>
      </Form>
    </RSVPDetails>
  );
};

export default EnterFirstName;
