import * as React from "react";
import { Carousel } from "react-bootstrap";

type Props = {};
const photoMobileStyle = {
  height: "400px",
  width: "100%"
};

export class PhotoHeader extends React.PureComponent<Props> {
  render() {
    return (
      <div className="photo-header">
        <Carousel>
          <Carousel.Item>
            <img
              src={require("../../Content/Images/HPEK_mobile_1.jpg")}
              alt="placeholder1"
              style={photoMobileStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../Content/Images/HPEK_mobile_2.jpg")}
              alt="placeholder1"
              style={photoMobileStyle}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../Content/Images/HPEK_mobile_3.jpg")}
              alt="placeholder1"
              style={photoMobileStyle}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default PhotoHeader;
