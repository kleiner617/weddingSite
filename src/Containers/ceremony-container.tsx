import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
  isMobile?: boolean;
};

const CeremonyDetails = styled("div")`
  padding: ${(props: Props): string => (props.isMobile ? `20px 0` : "40px 0")};
`;

const Title = styled("div")`
  font-size: ${(props: Props): string => (props.isMobile ? `42px` : "70px")};
  font-weight: bold;
  margin-top: 40px;
  padding: ${(props: Props): string => (props.isMobile ? `15px 0` : "30px 0")};
  color: #a6b691;
`;

const Details = styled("div")`
  font-size: 24px;
  margin: 20px;
`;

const DetailsTitle = styled("div")`
  font-size: ${(props: Props): string => (props.isMobile ? "30px" : "50px")};
  font-family: "Sacramento", cursive;
`;

const AtText = styled("p")`
  font-size: ${(props: Props): string => (props.isMobile ? "20px" : "30px")};
  margin: 0;
  line-height: ${(props: Props): string => (props.isMobile ? "15px" : "20px")};
`;
const DetailsText = styled("p")`
  font-size: ${(props: Props): string => (props.isMobile ? "24px" : "36px")};
  margin: 0;
`;
const SubDetailsText = styled("p")`
  font-size: ${(props: Props): string => (props.isMobile ? "20px" : "30px")};
  margin: 0;
`;

const ImageHolder = styled("div")``;

const CircleImage = styled("img")`
  margin-top: 30px;
  border-radius: 50%;
  height: ${(props: Props): string => (props.isMobile ? "250px" : "500px")};
  width: ${(props: Props): string => (props.isMobile ? "250px" : "500px")};
`;
const FloralImage = styled("img")`
  height: ${(props: Props): string => (props.isMobile ? "279px" : "557px")};
  width: ${(props: Props): string => (props.isMobile ? "303px" : "601px")};
  position: absolute;
  margin-top: ${(props: Props): string => (props.isMobile ? "25px" : "19px")};
  margin-left: ${(props: Props): string =>
    props.isMobile ? "-283px" : "-565px"};
`;

export class CeremonyContainer extends React.PureComponent<Props> {
  openMaps = () => {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPad") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    ) {
      window.open(
        "maps://maps.google.com/maps/dir/?api=1&destination=Urban+Roost+3023+W+Marshall+Street+Richmond+Virginia&amp;ll="
      );
    } /* else use Google */ else {
      window.open(
        "https://maps.google.com/maps/dir/?api=1&destination=Urban+Roost+3023+W+Marshall+Street+Richmond+Virginia&amp;ll="
      );
    }

    // // window.open(
    // //   "https:www.google.com/maps/dir/?api=1&destination=Urban+Roost+3023+W+Marshall+Street+Richmond+Virginia"
    // // // );
    // window.open(
    //   "https://maps.google.com/?q=Houston,+TX"
    //   "https://maps.google.com/maps/dir/?api=1&destination=Urban+Roost+3023+W+Marshall+Street+Richmond+Virginia&amp;ll="
    // );
  };
  render() {
    return (
      <CeremonyDetails className={this.props.className} id={this.props.id}>
        <ImageHolder>
          <CircleImage
            src={require("../Content/Images/circle_1.jpg")}
            {...this.props}
          ></CircleImage>
          <FloralImage
            src={require("../Content/Images/florals-6.png")}
            {...this.props}
          ></FloralImage>
        </ImageHolder>

        <Title {...this.props}>The Wedding</Title>
        <Details {...this.props}>
          <i
            className="material-icons"
            style={{ marginTop: "10px", fontSize: "35px" }}
          >
            schedule
          </i>
          <DetailsTitle {...this.props}>When</DetailsTitle>
          <DetailsText {...this.props}>May 16, 2020</DetailsText>
          <AtText {...this.props}>at</AtText>
          <DetailsText {...this.props}>4:30 pm</DetailsText>
        </Details>
        <Details>
          <i
            className="material-icons"
            style={{ marginTop: "25px", fontSize: "35px" }}
            onClick={this.openMaps}
          >
            place
          </i>
          <DetailsTitle {...this.props}>Where</DetailsTitle>
          <DetailsText {...this.props}>Urban Roost</DetailsText>
          <SubDetailsText {...this.props}>3023 W Marshall St</SubDetailsText>
          <SubDetailsText {...this.props}>Richmond, Virginia</SubDetailsText>
        </Details>
      </CeremonyDetails>
    );
  }
}

// Green color to use....
// #6f9667

export default CeremonyContainer;
