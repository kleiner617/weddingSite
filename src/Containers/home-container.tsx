// import * as React from "react";
import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import MenuHeader from "../Components/desktop/menu-header";
import PhotoHeader from "../Components/desktop/photo-header-large";
import ReceptionContainer from "./faq-container";
import RegistryContainer from "./registry-container";
import RSVPContainer from "./rsvp-container";
import CeremonyContainer from "./ceremony-container";
import Sticky from "react-sticky-el";
import NameHeaderDesktop from "../Components/desktop/name-header-desktop";

type Props = {};

const HomeContainerDiv = styled("div")``;

// const HomeContainer = () => {

//   return (
//     <HomeContainerDiv>
//
//       <Sticky topOffset={80}>
//         <MenuHeader />
//       </Sticky>

//       <CeremonyContainer></CeremonyContainer>
//       <ReceptionContainer></ReceptionContainer>
//       <RegistryContainer></RegistryContainer>
//       {/* <RSVPContainer></RSVPContainer> */}
//     </HomeContainerDiv>
//   );
// };

const getDimensions = (ele: any) => {
  const { height } = ele.getBoundingClientRect();
  // const height = "400px";
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

const HomeContainer = () => {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const ceremonyRef = useRef(null);
  const receptionRef = useRef(null);
  const registryRef = useRef(null);

  const sectionRefs = [
    { section: "ceremony", ref: ceremonyRef },
    { section: "reception", ref: receptionRef },
    { section: "registry", ref: registryRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  return (
    <div className="App">
      <PhotoHeader />
      <div className="content">
        <NameHeaderDesktop></NameHeaderDesktop>
        <div
          // className="sticky"
          className={`sticky ${
            visibleSection === "ceremony" ||
            visibleSection === "reception" ||
            visibleSection === "registry"
              ? "show"
              : "hide"
          }`}
        >
          <div className="header" ref={headerRef}>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "ceremony" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(ceremonyRef.current);
              }}
            >
              Ceremony
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "reception" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(receptionRef.current);
              }}
            >
              Reception
            </button>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "registry" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(registryRef.current);
              }}
            >
              Registry
            </button>
          </div>
        </div>

        <div className="section" id="ceremony" ref={ceremonyRef}>
          <CeremonyContainer></CeremonyContainer>
        </div>
        <div className="section" id="reception" ref={receptionRef}>
          <ReceptionContainer></ReceptionContainer>
        </div>
        <div className="section" id="registry" ref={registryRef}>
          <RegistryContainer></RegistryContainer>
        </div>
      </div>
      <div className="bottom-spacer" />
    </div>
  );
};

export default HomeContainer;
