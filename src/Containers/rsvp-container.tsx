import * as React from "react";
import styled from "@emotion/styled";

type Props = {};

const RSVPDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

export class RSVPContainer extends React.PureComponent<Props> {
  render() {
    return <RSVPDetails id="rsvp">This is the RSVP Details</RSVPDetails>;
  }
}

export default RSVPContainer;
