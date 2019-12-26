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
              src={require("../Content/Images/purple.jpg")}
              alt="placeholder1"
              style={{
                height: 200
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../Content/Images/green.jpg")}
              alt="placeholder1"
              style={{
                height: 200
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={require("../Content/Images/blue.jpg")}
              alt="placeholder1"
              style={{
                height: 200
              }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default PhotoHeader;
