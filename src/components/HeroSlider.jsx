// import React, { useState, useRef, useEffect } from 'react';
// import styled from 'styled-components';

// const SliderWrapper = styled.div`
//   width: 100%;
//   height: 100vh;
//   position: relative;
//   overflow: hidden;
// `;

// const SlideContainer = styled.div`
//   display: flex;
//   width: ${({ slideCount }) => slideCount * 100}%;
//   transform: translateX(-${({ currentSlide }) => currentSlide * (100 / slideCount)}%);
//   transition: transform 0.5s ease;
// `;

// const Slide = styled.div`
//   flex: 0 0 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   background-color: ${(props) => props.bg};
// `;

// const SlideImage = styled.img`
//   max-width: 100%;
//   height: auto;
// `;

// const SlideTitle = styled.h2`
//   font-size: 24px;
//   color: #fff;
//   margin-bottom: 16px;
// `;

// const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// const ShopNowButton = styled.button`
//   padding: 12px 24px;
//   background-color: #a86728;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #7e541f;
//   }
// `;

// const HeroSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const sliderItems = [
//     {
//       id: 1,
//       img: "https://res.cloudinary.com/kamisama/image/upload/v1679228518/Sisikemi2_dsb4ev.png",
//       title: "COLLECTION NAME",
//       bg: "f5fafd",
//       link: "/collection",
//     },
//     {
//       id: 2,
//       img: "https://res.cloudinary.com/kamisama/image/upload/v1679228518/Sisikemi2_dsb4ev.png",
//       title: "AUTUMN COLLECTION",
//       bg: "fcf1ed",
//       link: "/autumn",
//     },
//     {
//       id: 3,
//       img: "https://res.cloudinary.com/kamisama/image/upload/v1679228518/Sisikemi2_dsb4ev.png",
//       title: "LOUNGEWEAR LOVE",
//       bg: "fbf0f4",
//       link: "/loungewear",
//     },
//   ];
//   const slideCount = sliderItems.length;
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     // Automatically move to the next slide every 3 seconds
//     intervalRef.current = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
//     }, 3000);

//     return () => {
//       // Clear the interval when the component unmounts
//       clearInterval(intervalRef.current);
//     };
//   }, [slideCount]);

//   const handleSlideChange = (slideIndex) => {
//     // Clear the interval when the slide is changed manually
//     clearInterval(intervalRef.current);
//     setCurrentSlide(slideIndex);
//   };

//   return (
//     <SliderWrapper>
//       <SlideContainer currentSlide={currentSlide} slideCount={slideCount}>
//         {sliderItems.map((slide, index) => (
//           <Slide key={slide.id} bg={slide.bg}>
//             <SlideImage src={slide.img} alt={`Slide ${slide.id}`} />
//             <SlideTitle>{slide.title}</SlideTitle>
//             <ButtonWrapper>
//               <a href={slide.link}>
//                 <ShopNowButton>Shop Now</ShopNowButton>
//               </a>
//             </ButtonWrapper>
//           </Slide>
//         ))}
//       </SlideContainer>
//     </SliderWrapper>
//   );
// };

// export default HeroSlider;


import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import Styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = Styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ flexDirection: "column"})} 
`;

const Arrow = Styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props =>
    props.direction === "left" ? "left: 10px;" : "right: 10px;"}
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = Styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = Styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

const ImgContainer = Styled.div`
  height: 100%;
`;

const Image = Styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = Styled.div`
  flex: 1;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = Styled.h1`
  font-size: 70px;
`;

const Desc = Styled.p`
  margin: 20px 0;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 3px;
`;

const Button = Styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = direction => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              {/* <Desc> {item.desc}</Desc> */}
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
