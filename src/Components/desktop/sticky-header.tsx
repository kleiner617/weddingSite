import React from "react";
import styled from "@emotion/styled";
import { HashLink as Link } from "react-router-hash-link";
type Props = {
  visibleSection: string;
  scrollToHome?: any;
};

const HeartImg = styled("img")`
  height: 90px;
  width: 90px;
  margin-top: -10px;
`;

const StickyHeader = ({ visibleSection, scrollToHome }: Props) => {
  return (
    <div
      className={`sticky ${
        visibleSection === "ceremony" ||
        visibleSection === "faq" ||
        visibleSection === "getting-there" ||
        visibleSection === "details" ||
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

        <Link smooth to="/#faq">
          <button
            type="button"
            className={`header_link ${
              visibleSection === "faq" ? "selected" : ""
            }`}
          >
            FAQ
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
            onClick={scrollToHome}
          ></HeartImg>
        </Link>

        <Link smooth to="/#details">
          <button
            type="button"
            className={`header_link ${
              visibleSection === "details" ? "selected" : ""
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
