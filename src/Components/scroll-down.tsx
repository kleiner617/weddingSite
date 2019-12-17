import * as React from "react";
import styled from "@emotion/styled";

type Props = {};

export class ScrollDown extends React.PureComponent<Props> {
  render() {
    return (
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle" />
        </a>
      </p>
    );
  }
}

export default ScrollDown;
