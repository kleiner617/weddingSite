import * as React from "react";
import styled from "@emotion/styled";
import { slide as Menu } from "react-burger-menu";
import { NavHashLink as NavLink } from "react-router-hash-link";

type Props = {};

const MobileLayoutDiv = styled("div")``;

const styles = {
  bmBurgerButton: {
    // position: "relative",
    // display: "block",
    // width: "36px",
    // height: "30px",
    // padding: "0px 0px 0px 15px",
    // margin: "20px 0px 20px 26px",
    // zIndex: 1
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#757d60",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100%"
  },
  bmItemList: {
    // color:
  },
  bmItem: {
    fontSize: "28px",
    lineHeight: "60px",
    position: "relative"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  },
  normalText: {
    color: "#4A4A4A",
    fontWeight: "300"
  }
  // clickedText: {
  //   color: "#0559B3",
  //   fontWeight: "700"
  // }
};

const MobileNavigation = styled("div")`
  display: grid !important;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  justify-content: center;
  text-align: center;
`;

export class MobileNavMenu extends React.PureComponent<Props> {
  showSettings(event: any) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu styles={styles}>
        <MobileNavigation className="Somethingweird">
          <NavLink smooth to="/cermony#ceremony" activeClassName="active">
            Ceremony
          </NavLink>
          <NavLink smooth to="/reception#reception" activeClassName="active">
            Reception
          </NavLink>

          <NavLink to="/registry#registry" activeClassName="active">
            Registry
          </NavLink>

          <NavLink to="/rsvp#rsvp" activeClassName="active">
            RSVP
          </NavLink>
        </MobileNavigation>
      </Menu>
    );
  }
}

export default MobileNavMenu;
