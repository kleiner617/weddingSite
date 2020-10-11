import * as React from "react";
import { Carousel } from "react-bootstrap";

type Props = {};

export class PhotoHeader extends React.PureComponent<Props> {
  render() {
    return (
      <div className="photo-header">
        <Carousel>
          <Carousel.Item>

            <img
              src={require("../../Content/Images/EH_long_1.jpg")}
              alt="placeholder1"
              style={{
                width: "100%"
              }}
            />
          </Carousel.Item>

          <Carousel.Item>
          <img
              src={require("../../Content/Images/EH_wedding_long_1.jpg")}
              alt="placeholder1"
              style={{
                width: "100%"
              }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={require("../../Content/Images/EH_long_2.jpg")}
              alt="placeholder1"
              style={{
                width: "100%"
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              src={require("../../Content/Images/EH_wedding_long_2.jpg")}
              alt="placeholder1"
              style={{
                width: "100%"
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../Content/Images/EH_long_4.jpg")}
              alt="placeholder1"
              style={{
                width: "100%"
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              src={require("../../Content/Images/EH_wedding_long_3.jpg")}
              alt="placeholder1"
              style={{
                width: "100%"
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../../Content/Images/EH_long_5.jpg")}
              alt="placeholder1"
              style={{
                width: "100%"
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
          <img
              src={require("../../Content/Images/EH_wedding_long_4.jpg")}
              alt="placeholder1"
              style={{
                width: "100%"
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default PhotoHeader;
