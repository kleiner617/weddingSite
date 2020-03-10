import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

type Props = {
  ceremonyClick: () => void;
  venueClick: () => void;
  detailsClick: () => void;
  visibleSection: string;
  registryClick: () => void;
  rsvpClick: () => void;
  homeClick: () => void;
};

const TopHeader = styled("div")`
  position: absolute;
  margin-top: 10px;
  width: 100%;
  margin: auto;
  z-index: 999999;
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
        <TopHeaderButton className="top-button" onClick={props.ceremonyClick}>
          Ceremony
        </TopHeaderButton>
        <TopHeaderButton className="top-button" onClick={props.venueClick}>
          Venue
        </TopHeaderButton>
        <HeartImg
          src={require("../../Content/Images/heart_script_black.png")}
        ></HeartImg>
        <TopHeaderButton className="top-button" onClick={props.detailsClick}>
          Details
        </TopHeaderButton>
        <TopHeaderButton className="top-button" onClick={props.registryClick}>
          Registry
        </TopHeaderButton>
        <TopHeaderButton>
          <Link to={`/rsvp`}> RSVP </Link>
        </TopHeaderButton>
      </TopHeader>
    </div>
  );
};
export default MenuHeader;
