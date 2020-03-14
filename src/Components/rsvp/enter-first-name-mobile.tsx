import React, { FunctionComponent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "@emotion/styled";
// import { Form, Button } from "react-bootstrap";

type Props = {
  onNextButton: (invitationName: string) => void;
};

const RSVPDetails = styled("div")`
  margin-top: 40px;
`;
const FormStyle = styled("div")`
  margin-top: 40px;
`;
const RSVPQuestion = styled("div")`
  margin: auto;
  width: 70%;
  font-size: 30px;
`;

export const EnterFirstNameMobile: FunctionComponent<Props> = props => {
  const [invitationName, setInvitationName] = useState<string>("");
  const [enableButton, setEnableButton] = useState<boolean>(false);

  const onInvitationNameChange = (e: any) => {
    setInvitationName(e.currentTarget.value);
    if (e.currentTarget.value && e.currentTarget.value.length > 0) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  };

  const submitName = () => {
    props.onNextButton(invitationName);
  };

  const widthOfInput = "90%";

  return (
    <RSVPDetails id="rsvp">
      <RSVPQuestion>Please Enter the Name on your invitation</RSVPQuestion>
      <FormStyle>
        <Form onSubmit={submitName}>
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              value={invitationName}
              placeholder="Mr. and Mrs. John Doe"
              onChange={onInvitationNameChange}
              style={{
                width: `${widthOfInput}`,
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
              position: "fixed",
              bottom: "0",
              width: "100px",
              fontSize: "24px",
              right: "30px",
              marginBottom: "40px"
            }}
            onClick={submitName}
          >
            Next
          </Button>
        </Form>
      </FormStyle>
    </RSVPDetails>
  );
};

export default EnterFirstNameMobile;
