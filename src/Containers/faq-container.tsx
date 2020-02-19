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
  font-size: ${(props: Props): string => (props.isMobile ? `42px` : "70px")};
  font-weight: bold;
  padding: ${(props: Props): string => (props.isMobile ? `15px 0` : "30px 0")};
  margin-top: 40px;
  color: #a6b691;
`;
const Details = styled("div")`
  font-size: 24px;
  width: ${(props: Props): string => (props.isMobile ? "85%" : "70%")};
  margin: auto;
`;

const CircleImage = styled("img")`
  margin-top: 30px;
  border-radius: 50%;
  height: ${(props: Props): string => (props.isMobile ? `250px` : "500px")};
  width: ${(props: Props): string => (props.isMobile ? `250px` : "500px")};
`;

const FloralImage = styled("img")`
  height: ${(props: Props): string => (props.isMobile ? "279px" : "557px")};
  width: ${(props: Props): string => (props.isMobile ? "303px" : "601px")};
  position: absolute;
  margin-top: ${(props: Props): string => (props.isMobile ? "25px" : "19px")};
  margin-left: ${(props: Props): string =>
    props.isMobile ? "-283px" : "-565px"};
`;

const DetailsText = styled("p")`
  font-size: ${(props: Props): string => (props.isMobile ? "24px" : "36px")};
  margin: 0;
  padding-bottom: 20px;
`;
const SubDetailsText = styled("p")`
  font-size: ${(props: Props): string => (props.isMobile ? "20px" : "30px")};
  margin: 0;
`;

export class FAQContainer extends React.PureComponent<Props> {
  render() {
    return (
      <FAQDetails className={this.props.className} id={this.props.id}>
        <CircleImage
          src={require("../Content/Images/circle_2.jpg")}
          {...this.props}
        ></CircleImage>
        <FloralImage
          src={require("../Content/Images/florals-6.png")}
          {...this.props}
        ></FloralImage>
        <Title {...this.props}>Details</Title>
        <Details>
          <DetailsText {...this.props}>
            {" "}
            The venue will be open at 4pm and the ceremony will start at 4:30pm
          </DetailsText>
        </Details>
      </FAQDetails>
    );
  }
}

export default FAQContainer;
