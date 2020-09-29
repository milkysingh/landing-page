import React, { useState } from "react";

import {
  CarouselItem,
  Carousel,
  CarouselIndicators,
  CarouselControl
} from "reactstrap";

const items = ["Alex", "Bob", "Carlos"];
export default function CarouselComponent({ carouselItem }) {
  const [activeIndex, changeIndex] = useState(0);
  const next = () => {
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    changeIndex(nextIndex);
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    changeIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (!items) return;
    changeIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem key={item}>
      <p>{item}</p>
    </CarouselItem>
  ));

  return (
    <div className="App">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        data-testid="component-Carousel"
        interval
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>

      {/* <div className="App">
        <Bar data={data} options={options} />
      </div> */}
    </div>
  );
}
