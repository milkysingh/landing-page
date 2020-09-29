import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";

export default function Stats() {
  return (
    <section className="top_section">
      <Row>
        <Col md={4}>
          <div className="stats_section">
            <img src="https://via.placeholder.com/50" alt="icon"></img>
            <h3 className="subtitle">700K+</h3>
            <p>Active SME's</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="stats_section">
            <img src="https://via.placeholder.com/50" alt="icon"></img>
            <h3 className="subtitle">700K+</h3>
            <p>Active SME's</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="stats_section">
            <img src="https://via.placeholder.com/50" alt="icon"></img>
            <h3 className="subtitle">700K+</h3>
            <p>Active SME's</p>
          </div>
        </Col>
      </Row>
    </section>
  );
}
