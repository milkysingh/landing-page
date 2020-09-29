import React from "react";

import { Container } from "reactstrap";
import CarouselComponent from "./components/Carousel";
import Graph from "./components/Graph";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container className="body_container">
        <HeroSection />
        <Stats />
        <CarouselComponent />
        <Graph />
      </Container>

      {/* <div className="App">
        <Bar data={data} options={options} />
      </div> */}
    </div>
  );
}
