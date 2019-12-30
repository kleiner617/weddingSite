import * as React from "react";
import styled from "@emotion/styled";
import { Form, Button } from "react-bootstrap";

type Props = {};

const RSVPDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

const returnNameDetails = () => {
  return (
    <Form.Row>
      <Form.Group controlId="formName">
        <Form.Label>First Name</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group controlId="formName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control />
      </Form.Group>

      {/* <Form.Group controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group> */}
    </Form.Row>
  );
};

export class RSVPContainer extends React.PureComponent<Props> {
  render() {
    return (
      <RSVPDetails id="rsvp">
        <div>Celebrate with us!</div>
        <Form>
          {returnNameDetails()}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* TODO: ERK, need to only allow 1 checkbox at a time.  OR obviously just switch to radio buttons... */}
          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Will you be attending?</Form.Label>
            <Form.Check type="checkbox" label="yes" />
            <Form.Check type="checkbox" label="no" />
          </Form.Group>
          {/* Only return this based on the name that is typed in the first name/last name box. */}
          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>I'm bringing a plus one</Form.Label>
            <Form.Check type="checkbox" />
          </Form.Group>
          {/* TODO: ERK, need to only return this if they are actually returning a plus one... */}
          {returnNameDetails()}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Anything else we need to know?</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            RSVP
          </Button>
        </Form>
      </RSVPDetails>
    );
  }
}

export default RSVPContainer;
