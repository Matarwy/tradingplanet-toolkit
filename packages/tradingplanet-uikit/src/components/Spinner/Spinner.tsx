import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;


const lineGrow = keyframes`
        0% {
            height: 0;
        }
        100% {
            height: 75%;
        }
`;


const Container = styled.div`
   position: relative;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 75px;
    display: inline-block;
    vertical-align: middle;

    & .line {
        width: 8px;
        position: absolute;
        border-radius: 5px;
        bottom: 0;
        background: -webkit-gradient(linear, left top, left bottom, from(#1ee95d), to(#5714ce));
        background: -webkit-linear-gradient(top, #1ee95d, #5714ce);
        background: -o-linear-gradient(top, #1ee95d, #5714ce);
        background: linear-gradient(to bottom, #1ee95d, #5714ce);
    }
    
    & .line1 {
        left: 0;
        -webkit-animation: ${lineGrow} 0.5s ease alternate infinite;
        animation: ${lineGrow} 0.5s ease alternate infinite;
    }
    
    & .line2 {
        left: 20px;
        -webkit-animation: ${lineGrow} 0.5s 0.2s ease alternate infinite;
        animation: ${lineGrow} 0.5s 0.2s ease alternate infinite;
    }
    
    & .line3 {
        left: 40px;
        -webkit-animation: ${lineGrow} 0.5s 0.4s ease alternate infinite;
        animation: ${lineGrow} 0.5s 0.4s ease alternate infinite;
    }
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
    </Container>
  );
};

export default Spinner;


/*

<Container>
      <RotatingPancakeIcon width={`${size * 0.5}px`} />
      <FloatingPanIcon width={`${size}px`} />
    </Container>

*/