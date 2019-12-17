import * as React from "react";
import styled from "@emotion/styled";

type Props = {};

const RSVPDetails = styled("div")`
  height: 400px;
  background-color: #33a2ff;
`;

export class RSVPContainer extends React.PureComponent<Props> {
  render() {
    return <RSVPDetails id="rsvp">This is the RSVP Details</RSVPDetails>;
  }
}

export default RSVPContainer;
