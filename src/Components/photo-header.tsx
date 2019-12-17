import * as React from "react";
import Carousel from "nuka-carousel";

type Props = {};

export class PhotoHeader extends React.PureComponent<Props> {
  render() {
    return (
      <div className="photo-header">
        <Carousel swiping={true} wrapAround={true} initialSlideHeight={700}>
          <img
            src={require("../Content/Images/purple.jpg")}
            alt="placeholder1"
            style={{
              height: 800
            }}
          />
          <img
            src={require("../Content/Images/green.jpg")}
            alt="placeholder1"
            style={{
              height: 800
            }}
          />
          <img
            src={require("../Content/Images/blue.jpg")}
            alt="placeholder1"
            style={{
              height: 800
            }}
          />
        </Carousel>
      </div>
    );
  }
}

export default PhotoHeader;
