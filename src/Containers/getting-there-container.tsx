import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
  isMobile?: boolean;
};

const GettingThereDetails = styled("div")`
  padding: ${(props: Props): string => (props.isMobile ? `30px 0` : "60px 0")};
  background: #f0f3ed;
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

const CircleImage = styled("img")`
  margin-top: 30px;
  border-radius: 50%;
  height: ${(props: Props): string => (props.isMobile ? `250px` : "500px")};
  width: ${(props: Props): string => (props.isMobile ? `250px` : "500px")};
`;

export class GettingThereContainer extends React.PureComponent<Props> {
  render() {
    return (
      <GettingThereDetails className={this.props.className} id={this.props.id}>
        <CircleImage
          src={require("../Content/Images/circle_3.jpg")}
          {...this.props}
        ></CircleImage>
        <Title>Getting There</Title>
        <Details>
          <p>Urban roost is located in Scott's addition...</p>
        </Details>
      </GettingThereDetails>
    );
  }
}

export default GettingThereContainer;
