// import * as React from "react";
import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import PhotoHeader from "../Components/mobile/photo-header-mobile";
import FAQContainer from "./faq-container";
import RegistryContainer from "./registry-container";
import CeremonyContainer from "./ceremony-container";
import MobileNavMenu from "../Components/mobile/mobile-nav-menu";
import RSVPContainer from "./rsvp-container";
import GettingThereContainer from "./getting-there-container";
import NameHeaderMobile from "../Components/mobile/name-header-mobile";
import Footer from "../Components/footer";
import Countdown from "../Components/countdown-component";

type Props = {};

const MobileContainerDiv = styled("div")``;

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

const MobileContainer = () => {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const ceremonyRef = useRef(null);
  const gettingThereRef = useRef(null);
  const faqRef = useRef(null);
  const registryRef = useRef(null);

  const sectionRefs = [
    { section: "header", ref: headerRef },
    { section: "ceremony", ref: ceremonyRef },
    { section: "faq", ref: faqRef },
    { section: "getting-there", ref: gettingThereRef },
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

  const scrollToHome = (ref: any) => {
    scrollTo(headerRef.current);
  };

  return (
    <div className="App">
      <MobileNavMenu scrollToHome={scrollToHome} />
      <div className="mobile-header" ref={headerRef}>
        <PhotoHeader />
        <NameHeaderMobile></NameHeaderMobile>
      </div>

      {/* <Countdown isMobile={true} /> */}
      <div className="content">
        <div className="section" id="ceremony" ref={ceremonyRef}>
          <CeremonyContainer isMobile={true}></CeremonyContainer>
        </div>
        <div className="section" id="venue" ref={gettingThereRef}>
          <GettingThereContainer isMobile={true}></GettingThereContainer>
        </div>
        <div className="section" id="details" ref={faqRef}>
          <FAQContainer isMobile={true}></FAQContainer>
        </div>

        <div className="section" id="registry" ref={registryRef}>
          <RegistryContainer isMobile={true}></RegistryContainer>
        </div>
      </div>
      <Footer isMobile={true}></Footer>
    </div>
  );
};

export default MobileContainer;
