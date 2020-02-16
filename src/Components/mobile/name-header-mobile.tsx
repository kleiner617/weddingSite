import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
  isMobile?: boolean;
};

const NameContent = styled("div")`
  font-size: 24px;
`;

const EmilyHeatherTitle = styled("img")`
  margin-top: 30px;
  height: 200px;
`;
const DateText = styled("div")`
  font-size: 24px;
`;

export class NameHeader extends React.PureComponent<Props> {
  render() {
    return (
      <NameContent className={this.props.className} id={this.props.id}>
        <EmilyHeatherTitle
          src={require("../../Content/Images/name_header_mobile.png")}
          {...this.props}
        ></EmilyHeatherTitle>
        <DateText>May 16, 2020</DateText>
      </NameContent>
    );
  }
}

export default NameHeader;
