import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
};

const RegistryDetails = styled("div")`
  height: 1000px;
  border: 1px black;
`;

const Title = styled("div")`
  font-size: 42px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 10px;
`;

const Details = styled("div")`
  font-size: 24px;
`;

export class RegistryContainer extends React.PureComponent<Props> {
  render() {
    return (
      <RegistryDetails className={this.props.className} id={this.props.id}>
        <Title>Registry</Title>
        <Details>Here are a few stores we are registered with!</Details>
      </RegistryDetails>
    );
  }
}

export default RegistryContainer;
