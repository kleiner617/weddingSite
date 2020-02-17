// import * as React from "react";
import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";

type Props = {
  ceremonyClick: () => void;
  venueClick: () => void;
  detailsClick: () => void;
  visibleSection: string;
  registryClick: () => void;
};

const HomeContainerDiv = styled("div")``;

const TopHeader = styled("div")`
  position: absolute;
`;

const HeartImg = styled("img")`
  height: 90px;
  width: 90px;
  margin-top: -10px;
`;

const getDimensions = (ele: any) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom
  };
};

const scrollTo = (ele: any) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
};

const HomeContainer = (props: Props) => {
  // const [visibleSection, setVisibleSection] = useState();

  // const headerRef = useRef(null);
  // const ceremonyRef = useRef(null);
  // const gettingThereRef = useRef(null);
  // const faqRef = useRef(null);
  // const registryRef = useRef(null);

  // const sectionRefs = [
  //   { section: "header", ref: headerRef },
  //   { section: "ceremony", ref: ceremonyRef },
  //   { section: "getting-there", ref: gettingThereRef },
  //   { section: "faq", ref: faqRef },
  //   { section: "registry", ref: registryRef }
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { height: headerHeight } = getDimensions(headerRef.current);
  //     const scrollPosition = window.scrollY + headerHeight;

  //     const selected = sectionRefs.find(({ section, ref }) => {
  //       const ele = ref.current;
  //       if (ele) {
  //         const { offsetBottom, offsetTop } = getDimensions(ele);
  //         return scrollPosition > offsetTop && scrollPosition < offsetBottom;
  //       }
  //     });

  //     if (selected && selected.section !== visibleSection) {
  //       setVisibleSection(selected.section);
  //     } else if (!selected && visibleSection) {
  //       setVisibleSection(undefined);
  //     }
  //   };

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [visibleSection]);

  return (
    <div
      className={`${
        props.visibleSection === "ceremony" ||
        props.visibleSection === "getting-there" ||
        props.visibleSection === "faq" ||
        props.visibleSection === "registry"
          ? "top-header-hide"
          : "top-header-show"
      }`}
    >
      <TopHeader>
        <button
          type="button"
          className={`header_link ${
            props.visibleSection === "ceremony" ? "selected" : ""
          }`}
          onClick={props.ceremonyClick}
        >
          Ceremony
        </button>
        <button
          type="button"
          className={`header_link ${
            props.visibleSection === "getting-there" ? "selected" : ""
          }`}
          onClick={props.venueClick}
        >
          Venue
        </button>

        {/* <HeartImg
              src={require("../Content/Images/heart_script.png")}
            ></HeartImg> */}
        <button
          type="button"
          className={`header_link ${
            props.visibleSection === "faq" ? "selected" : ""
          }`}
          onClick={props.detailsClick}
        >
          Details
        </button>
        <button
          type="button"
          className={`header_link ${
            props.visibleSection === "registry" ? "selected" : ""
          }`}
          onClick={props.registryClick}
        >
          Registry
        </button>
      </TopHeader>
    </div>
  );
};
export default HomeContainer;
