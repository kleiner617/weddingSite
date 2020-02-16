import * as React from "react";
import styled from "@emotion/styled";
// import {something} from "../Content/Images/circle_1"

type Props = {
  className?: string;
  id?: string;
  isMobile?: boolean;
};

const CeremonyDetails = styled("div")`
  /* height: 1000px; */
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

const CircleImage = styled("img")`
  margin-top: 30px;
  border-radius: 50%;
  height: ${(props: Props): string => (props.isMobile ? `250px` : "500px")};
  width: ${(props: Props): string => (props.isMobile ? `250px` : "500px")};
`;

export class CeremonyContainer extends React.PureComponent<Props> {
  render() {
    return (
      <CeremonyDetails className={this.props.className} id={this.props.id}>
        <CircleImage
          src={require("../Content/Images/circle_1.jpg")}
          {...this.props}
        ></CircleImage>
        <Title>The Wedding</Title>
        <Details>
          <div>4:30 PM</div>
          <div>Urban Roost</div>
          <div>Richmond, Virginia</div>
          <div>reception to follow</div>
        </Details>
      </CeremonyDetails>
    );
  }
}

// Green color to use....
// #6f9667

export default CeremonyContainer;
