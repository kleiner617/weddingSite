import * as React from "react";
import styled from "@emotion/styled";
import { slide as Menu } from "react-burger-menu";
import { NavHashLink as NavLink } from "react-router-hash-link";

type PropsType = {};

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
    background: "#a6b691",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: "100%"
  },
  bmItemList: {
    fontSize: "28px",
    lineHeight: "60px",
    // position: "relative",
    display: "grid !important",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    top: "50%",
    left: "50%",
    paddingTop: "50%",
    // msTransform: "translate(-50%, -50%)",
    // Transform: "translate(-50%, -50%)",
    justifyContent: "center",
    textAlign: "center"
  },
  bmItem: {
    fontSize: "28px",
    lineHeight: "60px"
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

type StateType = {
  isOpen: boolean;
};

export class MobileNavMenu extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  showSettings(event: any) {
    // event.preventDefault();
  }
  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleStateChange(state: StateType) {
    this.setState({ isOpen: state.isOpen });
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu
        styles={styles}
        isOpen={this.state.isOpen}
        onStateChange={(state: StateType) => this.handleStateChange(state)}
      >
        {/* <MobileNavigation className="Somethingweird"> */}
        <NavLink
          smooth
          to="/cermony#ceremony"
          activeClassName="active"
          onClick={this.toggleMenu}
        >
          Ceremony
        </NavLink>
        <NavLink
          smooth
          to="/reception#reception"
          activeClassName="active"
          onClick={this.toggleMenu}
        >
          Reception
        </NavLink>

        <NavLink
          to="/registry#registry"
          activeClassName="active"
          onClick={this.toggleMenu}
        >
          Registry
        </NavLink>

        <NavLink to="/rsvp" activeClassName="active" onClick={this.toggleMenu}>
          RSVP
        </NavLink>
        {/* </MobileNavigation> */}
      </Menu>
    );
  }
}

export default MobileNavMenu;
