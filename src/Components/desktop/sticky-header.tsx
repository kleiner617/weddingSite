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

const StickyHeader = ({
  ceremonyClick,
  venueClick,
  detailsClick,
  registryClick,
  homeClick,
  visibleSection
}: Props) => {
  return (
    <div
      className={`sticky ${
        visibleSection === "ceremony" ||
        visibleSection === "getting-there" ||
        visibleSection === "faq" ||
        visibleSection === "registry" ||
        visibleSection === "rsvp"
          ? "show"
          : "hide"
      }`}
    >
      <div className="header">
        <button
          type="button"
          className={`header_link ${
            visibleSection === "ceremony" ? "selected" : ""
          }`}
          onClick={ceremonyClick}
        >
          Ceremony
        </button>
        <button
          type="button"
          className={`header_link ${
            visibleSection === "getting-there" ? "selected" : ""
          }`}
          onClick={venueClick}
        >
          Venue
        </button>
        <HeartImg
          src={require("../../Content/Images/heart_script_black.png")}
          onClick={homeClick}
        ></HeartImg>

        <button
          type="button"
          className={`header_link ${
            visibleSection === "faq" ? "selected" : ""
          }`}
          onClick={detailsClick}
        >
          Details
        </button>
        <button
          type="button"
          className={`header_link ${
            visibleSection === "registry" ? "selected" : ""
          }`}
          onClick={registryClick}
        >
          Registry
        </button>

        <Link className="header_link" to={`/rsvp`}>
          {" "}
          RSVP{" "}
        </Link>
      </div>
    </div>
  );
};
export default StickyHeader;
