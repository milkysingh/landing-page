import React from "react";
import { number, shape, string } from "prop-types";
import { Col, Row } from "reactstrap";
import "./style.css";
import SvgIcon from "../SvgIcon";
export default function Card({ testimonial }) {
  const renderRating = [];
  for (let i = 0; i < testimonial.rating; i++) {
    renderRating.push(<SvgIcon name="star" key={i} />);
  }

  return (
    <div className="card" id={testimonial.id}>
      <div className="card_contain">
        <Row>
          <Col md={4}>
            <div className="profile_picture">
              <img src="https://via.placeholder.com/50" alt="icon" />
            </div>
          </Col>
          <Col md={8}>
            <div className="profile">
              <h3 className="profile_name">{testimonial.name}</h3>
              {renderRating}
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <p className="profile_text">{testimonial.review}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

Card.propTypes = {
  testimonial: shape({
    name: string.isRequired,
    rating: number.isRequired,
    review: string.isRequired,
    id: number.isRequired,
    img: string.isRequired
  })
};
