import * as React from "react";
import styled from "@emotion/styled";

type Props = {};

const RegistryDetails = styled("div")`
  height: 400px;
  background-color: #daf7a6;
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
