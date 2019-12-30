import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
};

const CeremonyDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

export class CeremonyContainer extends React.PureComponent<Props> {
  render() {
    return (
      <CeremonyDetails className={this.props.className} id={this.props.id}>
        This should have details about the ceremony here...
      </CeremonyDetails>
    );
  }
}

export default CeremonyContainer;
