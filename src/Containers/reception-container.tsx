import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
};

const ReceptionDetails = styled("div")`
  height: 400px;
  border: 1px black;
`;

export class ReceptionContainer extends React.PureComponent<Props> {
  render() {
    return (
      <ReceptionDetails className={this.props.className} id={this.props.id}>
        This is the Reception Details
      </ReceptionDetails>
    );
  }
}

export default ReceptionContainer;
