import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import leftArrowImage from "../assets/icons/left-arrow.png";
import rightArrowImage from "../assets/icons/right-arrow.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HorizontalScrolbar = ({ data, bodyPart, setBodyPart, isBodyparts }) => {
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <Typography className="left-arrow" onClick={onClick}>
        <img src={rightArrowImage} alt="Next" />
      </Typography>
    );
  };

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <Typography className="right-arrow" onClick={onClick}>
        <img src={leftArrowImage} alt="Prev" />
      </Typography>
    );
  };

  const breakpoints = [
    { min: 1200, max: 1500, slidesToShow: 4, slidesToScroll: 4 },
    { min: 992, max: 1199, slidesToShow: 3, slidesToScroll: 3 },
    { min: 768, max: 991, slidesToShow: 2, slidesToScroll: 2 },
    { min: 480, max: 767, slidesToShow: 1, slidesToScroll: 1 },
  ];

  const responsiveSettings = breakpoints.map((bp) => ({
    breakpoint: bp.max + 1,
    settings: {
      slidesToShow: bp.slidesToShow,
      slidesToScroll: bp.slidesToScroll,
    },
  }));

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: responsiveSettings,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...sliderSettings}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
         {
        isBodyparts ?   <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
           : <ExerciseCard exercise={item}/>
        }
        </Box>
      ))}
    </Slider>
  );
};

export default HorizontalScrolbar;
