import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
  isMobile?: boolean;
};

const RegistryDetails = styled("div")`
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
  font-size: ${(props: Props): string => (props.isMobile ? "20px" : "32px")};
  width: ${(props: Props): string => (props.isMobile ? "89vw" : "53vw")};
  text-align: center;
  margin: auto;
`;

const LogoContainer = styled("div")``;

const LogoImage = styled("img")`
  margin: ${(props: Props): string =>
    props.isMobile ? "5px 22px" : "16px 43px"};
  width: ${(props: Props): string => (props.isMobile ? "100px" : "175px")};
  display: inline-block;
  cursor: pointer;
`;

const StandAloneZola = styled("img")`
  margin: 30px;
  width: ${(props: Props): string => (props.isMobile ? "200px" : "400px")};
  cursor: pointer;
`;
export class RegistryContainer extends React.PureComponent<Props> {
  onClickRegistryItem = (registry: string) => {
    switch (registry) {
      case "zola":
        window.open("https://www.zola.com/registry/heatherandemily");
        break;
      case "crateAndBarrel":
        window.open(
          "https://www.crateandbarrel.com/gift-registry/emily-klein-and-heather-priestley/r6083213"
        );
        break;
      case "williamsSonoma":
        window.open(
          "https://www.williams-sonoma.com/registry/qg5fslvtz8/registry-list.html"
        );
        break;
      case "surLaTable":
        window.open(
          "https://www.surlatable.com/on/demandware.store/Sites-SLT-Site/default/GiftRegistryCustomer-Show?ID=274e3f67afe30af6a000b59e77"
        );
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <RegistryDetails className={this.props.className} id={this.props.id}>
        <Title {...this.props}>Registry</Title>

        <Details {...this.props}>
          Your love and support is all we ask for on our special day. However,
          if you do wish to celebrate with a gift, we are registered at the
          following locations.
        </Details>
        <StandAloneZola
          src={require("../Content/Images/logos/Zola-Logo.png")}
          onClick={() => {
            this.onClickRegistryItem("zola");
          }}
          {...this.props}
        ></StandAloneZola>
        <LogoContainer>
          <LogoImage
            src={require("../Content/Images/logos/crate_and_barrel.png")}
            onClick={() => {
              this.onClickRegistryItem("crateAndBarrel");
            }}
            {...this.props}
          ></LogoImage>
          <LogoImage
            src={require("../Content/Images/logos/williams-sonoma-3.png")}
            onClick={() => {
              this.onClickRegistryItem("williamsSonoma");
            }}
            {...this.props}
          ></LogoImage>
          <LogoImage
            src={require("../Content/Images/logos/sur_la_table.png")}
            onClick={() => {
              this.onClickRegistryItem("surLaTable");
            }}
            {...this.props}
          ></LogoImage>
        </LogoContainer>
      </RegistryDetails>
    );
  }
}

export default RegistryContainer;
