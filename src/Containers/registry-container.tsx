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
  font-size: 42px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 10px;
`;

const Details = styled("div")`
  font-size: 20px;
`;

const LogoContainer = styled("div")``;

const LogoImage = styled("img")`
  margin: 5px 22px;
  width: 100px;
  display: inline-block;
`;
const StandAloneZola = styled("img")`
  margin: 30px;
  width: 150px;
`;
export class RegistryContainer extends React.PureComponent<Props> {
  onClickRegistryItem = (registry: string) => {
    switch (registry) {
      case "zola":
        alert(registry);
        break;
      case "crateAndBarrel":
        alert(registry);
        break;
      case "williamsSonoma":
        alert(registry);
        break;
      case "surLaTable":
        alert(registry);
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <RegistryDetails className={this.props.className} id={this.props.id}>
        <Title>Registry</Title>
        <Details>
          Your love and support is all we ask for on our special day. However,
          if you do wish to celebrate with a gift, we are registered at the
          following locations.
        </Details>
        <StandAloneZola
          src={require("../Content/Images/logos/Zola-Logo.png")}
          onClick={() => {
            this.onClickRegistryItem("zola");
          }}
        ></StandAloneZola>
        <LogoContainer>
          <LogoImage
            src={require("../Content/Images/logos/crate_and_barrel.png")}
            onClick={() => {
              this.onClickRegistryItem("crateAndBarrel");
            }}
          ></LogoImage>
          <LogoImage
            src={require("../Content/Images/logos/williams-sonoma-3.png")}
            onClick={() => {
              this.onClickRegistryItem("williamsSonoma");
            }}
          ></LogoImage>
          <LogoImage
            src={require("../Content/Images/logos/sur_la_table.png")}
            onClick={() => {
              this.onClickRegistryItem("surLaTable");
            }}
          ></LogoImage>
        </LogoContainer>
      </RegistryDetails>
    );
  }
}

export default RegistryContainer;
