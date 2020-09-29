import React from "react";

import { Container } from "reactstrap";
import Card from "./components/Card";
import CarouselComponent from "./components/Carousel";
import Graph from "./components/Graph";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import "./styles.css";
const testimonials = [
  {
    name: "Malkeet",
    img: "",
    rating: 5,
    review: "This is awesome",
    id: 1
  },
  {
    name: "Alex",
    img: "",
    rating: 4,
    review: "Yum Yum dib dib",
    id: 2
  },
  {
    name: "Youtube",
    img: "",
    rating: 4,
    review: "Challenging Stuff",
    id: 3
  },
  {
    name: "Ronik",
    img: "",
    rating: 4,
    review: "Challenging Stuff",
    id: 4
  },
  {
    name: "Bob",
    img: "",
    rating: 4,
    review: "Challenging Stuff",
    id: 5
  },
  {
    name: "Bob",
    img: "",
    rating: 4,
    review: "Challenging Stuff",
    id: 6
  }
];

export default function App() {
  const renderTestimonial = testimonials.map((testimonial, index) => {
    return <Card testimonial={testimonial} key={testimonial.id} />;
  });
  return (
    <div className="App">
      <Header />
      <Container className="body_container">
        <HeroSection />
        <Stats />
        <CarouselComponent>{renderTestimonial}</CarouselComponent>
        <Graph />
      </Container>
    </div>
  );
}
