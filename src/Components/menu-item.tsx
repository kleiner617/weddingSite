import React, { Component } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
// Use it just like a RRv4/5 <Link> (to can be a string or an object, see RRv4/5 api for details):

type Props = {
  linkText: string;
  link: string;
};

export class MenuItem extends React.PureComponent<Props> {
  render() {
    return (
      <NavLink to={`/${this.props.link}`} activeClassName="active">
        {this.props.linkText}
      </NavLink>
      // <Link to={`/home#${this.props.link}`}>{this.props.linkText}</Link>;
    );
  }
}

export default MenuItem;
