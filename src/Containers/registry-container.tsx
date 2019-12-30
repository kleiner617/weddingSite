import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
};

const RegistryDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

export class RegistryContainer extends React.PureComponent<Props> {
  render() {
    return (
      <RegistryDetails className={this.props.className} id={this.props.id}>
        This is the Registry Details
      </RegistryDetails>
    );
  }
}

export default RegistryContainer;
