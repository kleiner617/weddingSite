// import * as React from "react";
import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import MenuHeader from "../Components/desktop/menu-header";
import PhotoHeader from "../Components/desktop/photo-header-large";
import FAQContainer from "./faq-container";
import RegistryContainer from "./registry-container";
import RSVPContainer from "./rsvp-container";
import CeremonyContainer from "./ceremony-container";
import Sticky from "react-sticky-el";
import GettingThere, { GettingThereContainer } from "./getting-there-container";
import NameHeaderDesktop from "../Components/desktop/name-header-desktop";
import Footer from "../Components/footer";

type Props = {};

const HomeContainerDiv = styled("div")``;

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

const HomeContainer = () => {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const ceremonyRef = useRef(null);
  const gettingThereRef = useRef(null);
  const faqRef = useRef(null);
  const registryRef = useRef(null);

  const sectionRefs = [
    { section: "header", ref: headerRef },
    { section: "ceremony", ref: ceremonyRef },
    { section: "getting-there", ref: gettingThereRef },
    { section: "faq", ref: faqRef },
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

  const scrollToCeremony = () => {
    scrollTo(ceremonyRef.current);
  };
  const scrollToVenue = () => {
    scrollTo(gettingThereRef.current);
  };
  const scrollToDetails = () => {
    scrollTo(faqRef.current);
  };
  const scrollToRegistry = () => {
    scrollTo(registryRef.current);
  };

  return (
    <div className="App">
      <div className="content">
        <div className="section" id="header" ref={headerRef}>
          <MenuHeader
            ceremonyClick={scrollToCeremony}
            venueClick={scrollToVenue}
            detailsClick={scrollToDetails}
            registryClick={scrollToRegistry}
            visibleSection={visibleSection}
          ></MenuHeader>
          <PhotoHeader />
          <NameHeaderDesktop></NameHeaderDesktop>
        </div>
        <div
          // className="sticky"
          className={`sticky ${
            visibleSection === "ceremony" ||
            visibleSection === "getting-there" ||
            visibleSection === "faq" ||
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
                visibleSection === "getting-there" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(gettingThereRef.current);
              }}
            >
              Venue
            </button>

            <HeartImg
              src={require("../Content/Images/heart_script.png")}
            ></HeartImg>
            <button
              type="button"
              className={`header_link ${
                visibleSection === "faq" ? "selected" : ""
              }`}
              onClick={() => {
                scrollTo(faqRef.current);
              }}
            >
              Details
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
        <div className="section" id="getting-there" ref={gettingThereRef}>
          <GettingThereContainer></GettingThereContainer>
        </div>
        <div className="section" id="faq" ref={faqRef}>
          <FAQContainer></FAQContainer>
        </div>
        <div className="section" id="registry" ref={registryRef}>
          <RegistryContainer></RegistryContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomeContainer;
