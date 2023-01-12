import "./sty2.css"
import styled from "styled-components";
import React, { useEffect, useRef } from 'react'

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';

const SeasonsContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index:30;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzAwNjNhNiIvPjxzdG9wIG9mZnNldD0iMTUlIiBzdG9wLWNvbG9yPSIjMDA3MmMwIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4g");
  background-size: 100%;
  transition: all 2s ease;
  background-image: -webkit-gradient(
    linear,
    50% 0%,
    50% 100%,
    color-stop(0%, #0063a6),
    color-stop(15%, #0072c0),
    color-stop(100%, #ffffff)
  );
  background-image: -moz-linear-gradient(
    top,
    #0063a6 0%,
    #0072c0 15%,
    #ffffff 100%
  );
  background-image: -webkit-linear-gradient(
    top,
    #0063a6 0%,
    #0072c0 15%,
    #ffffff 100%
  );
  background-image: linear-gradient(
    to bottom,
    #0063a6 0%,
    #0072c0 15%,
    #ffffff 100%
  );
`;
const Mainn =  styled.div`
padding: 2rem;
width: 50vw;
height: auto;
z-index: 10000;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.7rem);
position: absolute;
left: 20%;
top: 12rem;
@media(max-width:50em){
    left: 2rem;
    padding:auto;
    margin:auto;
  }
`
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkN=()=>{

  const ref = useRef(null);
  const yinyang = useRef(null);



  useEffect(() => {
      let element = ref.current;
     
      
      const rotate = () => {
       
       element.style.transform = `translateX(${-window.pageYOffset/3}px)`
    
       
        return (yinyang.current.style.transform = `rotate(180deg)`)
      }
  
      window.addEventListener('scroll', rotate)
      return () => {
        window.removeEventListener('scroll', rotate);
        
      }
    }, [])

  return(
    <SeasonsContainer >
        <span className="clud clud1"></span>
        <span className="clud clud2"></span>
      <div  id="summer" className="season fall active">
      </div>
      <span className="gras"></span>
      <Mainn ref={ref}   variants={container} initial='hidden' animate='show'  >
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Mainn>
    </SeasonsContainer>
  );
};

export default WorkN