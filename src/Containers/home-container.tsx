// import * as React from "react";
import React, { useRef, useEffect, useState } from "react";
import styled from "@emotion/styled";
import MenuHeader from "../Components/desktop/menu-header";
import PhotoHeader from "../Components/desktop/photo-header-large";
import FAQContainer from "./faq-container";
import RegistryContainer from "./registry-container";
import CeremonyContainer from "./ceremony-container";
import StickyHeader from "../Components/desktop/sticky-header";
import NameHeaderDesktop from "../Components/desktop/name-header-desktop";
import Footer from "../Components/footer";
import CountdownComponent from "../Components/countdown-component";
import GettingThereContainer from "../Containers/getting-there-container";
import { HashLink as Link } from "react-router-hash-link";

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
    console.log("this is the first use Effect", visibleSection);
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + 82.76;

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

  const scrollToHome = () => {
    scrollTo(headerRef.current);
  };

  return (
    <div className="App">
      <div className="content">
        <div className="section" id="header" ref={headerRef}>
          <MenuHeader
            visibleSection={visibleSection}
            scrollToHome={scrollToHome}
          ></MenuHeader>
          <PhotoHeader />
          <NameHeaderDesktop />
          <CountdownComponent isMobile={true} />
        </div>
        <StickyHeader
          visibleSection={visibleSection}
          scrollToHome={scrollToHome}
        />
        <div className="section" id="ceremony" ref={ceremonyRef}>
          <CeremonyContainer></CeremonyContainer>
        </div>
        <div className="section" id="venue" ref={gettingThereRef}>
          <GettingThereContainer></GettingThereContainer>
        </div>
        <div className="section" id="details" ref={faqRef}>
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
