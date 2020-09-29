import React from "react";
import "./style.css";
import { Container } from "reactstrap";

export default function Header() {
  return (
    <header className="header head_box">
      <Container>
        <div className="head_left">
          <h1>PAGERBOOK</h1>
        </div>
        <div className="head_right">
          <span>About us</span>
        </div>
        <div className="clearfix"></div>
      </Container>
    </header>
  );
}
