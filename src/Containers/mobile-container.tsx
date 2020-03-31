import React, { useRef, useEffect, useState } from "react";
import PhotoHeader from "../Components/mobile/photo-header-mobile";
import DetailsContainer from "./details-container";
import RegistryContainer from "./registry-container";
import CeremonyContainer from "./ceremony-container";
import MobileNavMenu from "../Components/mobile/mobile-nav-menu";
import GettingThereContainer from "./getting-there-container";
import COVIDContainer from "./covid-container";
import NameHeaderMobile from "../Components/mobile/name-header-mobile";
import Footer from "../Components/footer";

type Props = {};

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

const MobileContainer = () => {
  const [visibleSection, setVisibleSection] = useState<any>();

  const headerRef = useRef(null);
  const ceremonyRef = useRef(null);
  const covidRef = useRef(null);
  const gettingThereRef = useRef(null);
  const detailsRef = useRef(null);
  const registryRef = useRef(null);

  const sectionRefs = [
    { section: "header", ref: headerRef },
    { section: "ceremony", ref: ceremonyRef },
    { section: "faq", ref: covidRef },
    { section: "details", ref: detailsRef },
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
  }, [visibleSection, sectionRefs]);

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
        <div className="section" id="faq" ref={covidRef}>
          <COVIDContainer isMobile={true}></COVIDContainer>
        </div>

        <div className="section" id="venue" ref={gettingThereRef}>
          <GettingThereContainer isMobile={true}></GettingThereContainer>
        </div>
        <div className="section" id="details" ref={detailsRef}>
          <DetailsContainer isMobile={true}></DetailsContainer>
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
