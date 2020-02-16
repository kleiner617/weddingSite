import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
  isMobile?: boolean;
};

const FooterText = styled("div")`
  height: 1000px;
  border: 1px black;
`;
const PhotographyText = styled("div")`
  width: 100%;
  font-size: 18px;
  /* font */
`;

export class Footer extends React.PureComponent<Props> {
  render() {
    return (
      <FooterText id={this.props.id}>
        <PhotographyText>
          All photography provided by Brett Denfeld
        </PhotographyText>
      </FooterText>
    );
  }
}

export default Footer;
