import * as React from "react";
import styled from "@emotion/styled";
import { slide as Menu } from "react-burger-menu";
import { NavHashLink as NavLink } from "react-router-hash-link";

type PropsType = {
  allRefs: any;
  navMenuOnClick: (ref: any) => void;
};

const MobileLayoutDiv = styled("div")``;

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "20px",
    top: "20px"
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
    width: "100%",
    fontSize: "40px"
  },
  bmItemList: {
    fontSize: "28px",
    lineHeight: "60px",
    // position: "relative",
    display: "grid !important",
    gridTemplateRows: "1fr 1fr 1fr 1fr",
    top: "50%",
    left: "50%",
    paddingTop: "30%",
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
};

const HeartImg = styled("img")`
  height: 90px;
  width: 90px;
  margin-top: -10px;
  display: inline-block !important;
  margin-top: 75px;
`;

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
  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  onMenuItemClick = (selectedType: string) => {
    this.toggleMenu();
  };

  handleStateChange(state: StateType) {
    this.setState({ isOpen: state.isOpen });
  }

  render() {
    return (
      <Menu
        styles={styles}
        isOpen={this.state.isOpen}
        onStateChange={(state: StateType) => this.handleStateChange(state)}
        customBurgerIcon={
          <i className="material-icons" style={{ fontSize: "35px" }}>
            menu
          </i>
        }
      >
        <NavLink
          smooth
          to="/cermony#ceremony"
          activeClassName="active"
          onClick={this.toggleMenu}
        >
          Ceremony
        </NavLink>

        <NavLink
          to="/getting-there#getting-there"
          activeClassName="active"
          onClick={this.toggleMenu}
        >
          Venue
        </NavLink>
        <NavLink
          smooth
          to="/faq#faq"
          activeClassName="active"
          onClick={this.toggleMenu}
        >
          Details
        </NavLink>
        <NavLink
          to="/registry#registry"
          activeClassName="active"
          onClick={this.toggleMenu}
        >
          Registry
        </NavLink>

        <HeartImg
          src={require("../../Content/Images/heart_script_black.png")}
        ></HeartImg>

        {/* <NavLink to="/rsvp" activeClassName="active" onClick={this.toggleMenu}>
          RSVP
        </NavLink> */}
      </Menu>
    );
  }
}

export default MobileNavMenu;
