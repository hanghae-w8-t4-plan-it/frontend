// React
import React, { useState, useRef } from "react";
// Styled Component
import styled from "styled-components";
// React-Router-Dom
import { useNavigate } from "react-router-dom";
// React Icon
import { AiOutlineLeft } from "react-icons/ai";
// Planets Imgs
import { A3, B3, C3, D3, E3 } from "../static/images";
// Elments
import Button from "../element/Button";
// Redux
import { useDispatch } from "react-redux";
import { createPlanetThunk } from "../redux/modules/planetSlice";

const CreatePlanet = () => {

  // Initial Opacity object, i.e., initla Opacity object for hook
  const initOpState = {
    firstOpa : 0.4,
    secondOpa : 0.4,
    thirdOpa : 0.4,
    fourthOpa : 0.4,
    fifthOpa : 0.4
  }
  
  // Hook : To update the clicked planet's opacity
  const [opacity, setOpacity] = useState(initOpState);

  // Navigation
  const navigate = useNavigate();

  // Redux : dispatch
  const dispatch = useDispatch();
  
  // Assigning the clicked planetType for API
  var planetType = ""

  // Creating current date's planet type => navigate to dlytodo page
  const onClickHandler = () => {
    const currDate = new Date()
    const parsedCurrDate = `${currDate.getFullYear()}-${String(currDate.getMonth()+1).padStart(2,'0')}-${String(currDate.getDate()).padStart(2,'0')}`
    dispatch(createPlanetThunk({planetType,parsedCurrDate}))
    navigate("/dlytodo")
  }

  // If one of planets get clicked,
  // assigning the corresponding planetType # to planetType Var
  // update the corresponding img's opacity from 0.4 to 1 with useState
  const onClickPlanetHandler = (type) => {
  
  if(type === 1){
    planetType=1;
    setOpacity({firstOpa : 1})
    console.log("Checking ", planetType)
  }
  else if(type === 2){
    planetType=2;
    setOpacity({secondOpa: 1})
    
  }
  else if(type === 3){
    planetType=3
    setOpacity({thirdOpa: 1})
    console.log("Checking ", planetType)
  }
  else if(type === 4){
    planetType=4
    setOpacity({fourthOpa: 1})
    console.log("Checking ", planetType)
  }
  else{
    planetType=5
    setOpacity({fifthOpa: 1})
    console.log("Checking ", planetType)
  }
  }

  return (
    <StyContainer>
      <StyHeader>
        <AiOutlineLeft className="arrow" />
        <h1>오늘의 행성</h1>
      </StyHeader>
      <StyContent>오늘 키워갈 행성을 골라주세요.</StyContent>
      <StyPlanets>
        <button onClick={()=>{onClickPlanetHandler(1)}}>
          <img src={A3} alt="A3" style={{opacity:opacity.firstOpa}} className="first"/>
        </button>
        <button onClick={()=>{onClickPlanetHandler(2)}}>
          <img src={B3} alt="B3" style={{opacity:opacity.secondOpa}} className="second"/>
        </button>
        <button onClick={()=>{onClickPlanetHandler(3)}}>
          <img src={C3} alt="C3" style={{opacity:opacity.thirdOpa}} className="third"/>
        </button>
        <button onClick={()=>{onClickPlanetHandler(4)}}>
          <img src={D3} alt="D3" style={{opacity:opacity.fourthOpa}} className="fourth"/>
        </button>
        <button onClick={()=>{onClickPlanetHandler()}}>
          <img src={E3} alt="E3" style={{opacity:opacity.fifthOpa}} className="fifth"/>
        </button>
      </StyPlanets>
      {(opacity.firstOpa === 0.4 || opacity.secondOpa === 0.4 || opacity.thirdOpa === 0.4 || opacity.fourthOpa === 0.4 || opacity.fifthOpa === 0.4) ?
        <Button
        _onClick={()=> {onClickHandler()}}
        height="2em"
        border="none"
        color="#FFFFFF"
        backgroundColor="#3185F3"
        >
        확인
      </Button>
      : 
      <Button
        _onClick={()=> {onClickHandler()}}
        height="2em"
        border="none"
        color="#FFFFFF"
        backgroundColor="#3185F3"
        >
        확인
      </Button>
      }
      
    </StyContainer>
  );
};

export default CreatePlanet;

const StyContainer = styled.div`
  padding: 15px;
  top: 0;
  color: #fff;
`;

const StyHeader = styled.div`
  position: sticky;
  display: flex;
  align-items: center;

  .arrow {
    margin-right: ${(props) => props.theme.margins.small};
  }

  h1 {
    font-weight: ${(props) => props.theme.fontWeight.Bold};
    font-size: ${(props) => props.theme.fontSizes.xlll};
    margin-bottom: 0;
  }
`;
const StyContent = styled.div`
  text-align: center;
  color: #b1bdcf;
  font-size: 0.93em;
  margin: 2.6em 0;
`;

const StyPlanets = styled.div`
  text-align: center;
  button {
    background: transparent;
    border: none;
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      opacity: 0.4;
    }
    img:hover{
      opacity: 1;
    }
  }
`;


