import * as React from "react";
import styled from "@emotion/styled";
// import { NavLink } from "react-router-dom";

import { NavHashLink as NavLink } from "react-router-hash-link";

type Props = {};

// TODO: want to edit this header so that it is transparent above the images
// Then, as user scrolls through sections, the navigation changes and header becomes colored block

const HeaderContainer = styled("nav")`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 1fr 1fr;
  height: 60px;
`;

const CenterText = styled("div")`
  font-size: 32px;
  justify-self: center;
  align-self: center;
`;

export class MenuHeader extends React.PureComponent<Props> {
  render() {
    return (
      <div className="container">
        <HeaderContainer className="navbar navbar-light bg-light fixed-top">
          <NavLink smooth to="/cermony#ceremony" activeClassName="active">
            Ceremony
          </NavLink>

          <NavLink smooth to="/reception#reception" activeClassName="active">
            Reception
          </NavLink>

          <NavLink to="/registry#registry" activeClassName="active">
            Registry
          </NavLink>

          <NavLink activeClassName="active">RSVP</NavLink>
        </HeaderContainer>
      </div>
    );
  }
}

export default MenuHeader;
