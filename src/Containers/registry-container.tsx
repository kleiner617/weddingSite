import * as React from "react";
import styled from "@emotion/styled";

type Props = {};

const RegistryDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

export class RegistryContainer extends React.PureComponent<Props> {
  render() {
    return (
      <RegistryDetails id="registry">
        This is the Registry Details
      </RegistryDetails>
    );
  }
}

export default RegistryContainer;
