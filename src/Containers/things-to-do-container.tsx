import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
  isMobile?: boolean;
};

const ThingsToDoDetails = styled("div")`
  padding: ${(props: Props): string => (props.isMobile ? `30px 0` : "60px 0")};
  background: #f0f3ed;
`;

const Title = styled("div")`
  font-size: ${(props: Props): string => (props.isMobile ? `42px` : "70px")};
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
`;
const SubDetailsText = styled("p")`
  font-size: ${(props: Props): string => (props.isMobile ? "20px" : "30px")};
  margin: 0;
`;

export class ThingsToDoContainer extends React.PureComponent<Props> {
  render() {
    return (
      <ThingsToDoDetails className={this.props.className} id={this.props.id}>
        <CircleImage
          src={require("../Content/Images/circle_4.jpg")}
          {...this.props}
        ></CircleImage>
        <FloralImage
          src={require("../Content/Images/florals-6.png")}
          {...this.props}
        ></FloralImage>
        <Title {...this.props}>Things To Do in RVA</Title>
        <Details>
          <DetailsText {...this.props}>
            If you're in RVA for the weekend, here are some of our favorite
            things to do!
          </DetailsText>
          <SubDetailsText>VMFA</SubDetailsText>
          <SubDetailsText>Breweries around town</SubDetailsText>
        </Details>
      </ThingsToDoDetails>
    );
  }
}

export default ThingsToDoContainer;
