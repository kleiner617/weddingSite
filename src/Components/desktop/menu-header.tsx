import React from "react";
import styled from "@emotion/styled";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

type Props = {
  visibleSection: string;
  scrollToHome?: any;
};

const TopHeader = styled("div")`
  position: absolute;
  margin-top: 10px;
  width: 100%;
  margin: auto;
  z-index: 9;
`;
const TopHeaderButton = styled("div")`
  display: inline-block;
  color: black;
  font-weight: bold;
  font-size: 24px;
  padding: 0 40px;
  cursor: pointer;
  :hover {
    color: #081090;
  }
`;

const HeartImg = styled("img")`
  height: 90px;
  width: 90px;
  margin-top: -10px;
`;

const MenuHeader = (props: Props) => {
  return (
    <div>
      <TopHeader>
        <Link to="/#ceremony" smooth>
          <TopHeaderButton className="top-button">Ceremony</TopHeaderButton>
        </Link>
        <Link to="/#venue" smooth>
          <TopHeaderButton className="top-button">Venue</TopHeaderButton>{" "}
        </Link>
        <Link to="/" smooth>
          <HeartImg
            src={require("../../Content/Images/heart_script_black.png")}
            onClick={props.scrollToHome}
          ></HeartImg>
        </Link>

        <Link to="/#details" smooth>
          <TopHeaderButton className="top-button">Details</TopHeaderButton>{" "}
        </Link>

        <Link to="/#registry" smooth>
          <TopHeaderButton className="top-button">Registry</TopHeaderButton>{" "}
        </Link>

        <Link to="/#rsvp" smooth>
          <TopHeaderButton>
            <Link to={`/rsvp`}> RSVP </Link>
          </TopHeaderButton>{" "}
        </Link>
      </TopHeader>
    </div>
  );
};
export default MenuHeader;
