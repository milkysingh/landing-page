import React from "react";
import { Row, Col } from "reactstrap";
import "./style.css";
import AppStoreIcon from "../GooglePlayStoreIcon";

export default function HeroSection() {
  return (
    <section className="top_section">
      <Row>
        <Col md={6}>
          <h3 className="subtitle">Employee Management at your Finger Tips</h3>
          <p>
            India's best Payroll and Attendance Management tool tailored for
            Small & Medium Enterprises
          </p>
          <AppStoreIcon />
        </Col>
        <Col md={6}>
          <div className="empty_section">&nbsp;</div>
        </Col>
      </Row>
    </section>
  );
}
