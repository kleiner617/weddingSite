import * as React from "react";
import styled from "@emotion/styled";

type Props = {};

const CeremonyDetails = styled("div")`
  height: 400px;
  background-color: #6712a0;
`;

export class CeremonyContainer extends React.PureComponent<Props> {
  render() {
    return (
      <CeremonyDetails id="ceremony">
        This should have details about the ceremony here...
      </CeremonyDetails>
    );
  }
}

export default CeremonyContainer;
