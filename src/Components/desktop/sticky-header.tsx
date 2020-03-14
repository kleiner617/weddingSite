import React from "react";
import styled from "@emotion/styled";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
type Props = {
  visibleSection: string;
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

const StickyHeader = ({ visibleSection }: Props) => {
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
        <Link smooth to="/#ceremony">
          <button
            type="button"
            className={`header_link ${
              visibleSection === "ceremony" ? "selected" : ""
            }`}
          >
            Ceremony
          </button>
        </Link>

        <Link smooth to="/#venue">
          <button
            type="button"
            className={`header_link ${
              visibleSection === "getting-there" ? "selected" : ""
            }`}
          >
            Venue
          </button>
        </Link>

        <Link smooth to="/">
          <HeartImg
            src={require("../../Content/Images/heart_script_black.png")}
          ></HeartImg>
        </Link>

        <Link smooth to="/#details">
          <button
            type="button"
            className={`header_link ${
              visibleSection === "faq" ? "selected" : ""
            }`}
          >
            Details
          </button>
        </Link>
        <Link smooth to="/#registry">
          <button
            type="button"
            className={`header_link ${
              visibleSection === "registry" ? "selected" : ""
            }`}
          >
            Registry
          </button>
        </Link>

        <Link className="header_link" to={`/rsvp`}>
          {" "}
          RSVP{" "}
        </Link>
      </div>
    </div>
  );
};
export default StickyHeader;
