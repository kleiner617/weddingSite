import * as React from "react";
import styled from "@emotion/styled";

type Props = {
  className?: string;
  id?: string;
};

const FAQDetails = styled("div")`
  height: 1000px;
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

export class FAQContainer extends React.PureComponent<Props> {
  render() {
    return (
      <FAQDetails className={this.props.className} id={this.props.id}>
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
