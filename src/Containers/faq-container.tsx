import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
  isMobile?: boolean;
};

const FAQDetails = styled("div")`
  padding: ${(props: Props): string => (props.isMobile ? `30px 0` : "60px 0")};
`;

const Title = styled("div")`
  font-size: 42px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 10px;
  color: #a6b691;
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

export class FAQContainer extends React.PureComponent<Props> {
  render() {
    return (
      <FAQDetails className={this.props.className} id={this.props.id}>
        <CircleImage
          src={require("../Content/Images/circle_2.jpg")}
          {...this.props}
        ></CircleImage>
        <Title>Details</Title>
        <Details>
          <p>Valet parking will be available...</p>
          <p>Open bar</p>
          <p> Please let us know if you have any dietary restrictions</p>
        </Details>
      </FAQDetails>
    );
  }
}

export default FAQContainer;
