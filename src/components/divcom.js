import "./sty2.css";
import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import BlogN from "./BlogN";
import SkillN from "./SkillN";
import WorkN from "./WorkN";
import { NavLink } from "react-router-dom";

const SeasonsContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: ${(props) => (props.click ? "0%" : "-102%")};
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



const Center = styled.button`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.click ? "0%" : "102%")};
  height: 70px;
  width: 60px;
  border-radius: 0px 40px 40px 0px;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: black;
  cursor: pointer;
  z-index:50;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SKILLS = styled.div`
  position: absolute;
  top: 35%;
  left:0;
  height: 100%;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: auto;
  border-radius: 4px;
  text-decoration: none;
  z-index: 1;
  .title {
    color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
    font-size: calc(1rem + 3vw);
    z-index: 0;
  }
`;

const WORK = styled.div`
  position: absolute;
  top: 35%;
  height: 100%;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: auto;
  border-radius: 4px;
  text-decoration: none;
  z-index: 1;
  .title {
    color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
    font-size: calc(1rem + 3vw);
    z-index: 0;
  }
`;

const BLOG = styled.div`
  position: absolute;
  top: 35%;
  height: 100%;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: auto;
  border-radius: 4px;
  text-decoration: none;
  z-index: 1;
  .title {
    color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
    font-size: calc(1rem + 3vw);
    z-index: 0;
  }
`



const Contact = styled(NavLink)`
  position: absolute;
  top: 35%;
  height: 100%;
  width: 100%;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: auto;
  border-radius: 4px;
  text-decoration: none;
  z-index: 1;
  .title {
    color: ${(props) => `rgba(${props.theme.textRgba},0.7)`};
    font-size: calc(1rem + 3vw);
    z-index: 0;
  }
`;
const Button=styled.button`
position: absolute;
top: 50%;
left: 102;
height: 70px;
width: 60px;
border-radius: 0px 40px 40px 0px;
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: black;
cursor: pointer;
z-index:3001;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`


const Divcom = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [ck2,setck2]=useState(false);
  const handleck2=()=>setck2(!ck2);
  const [ck3,setck3]=useState(false);
  const handleck3=()=>setck3(!ck3);
  const [ck4,setck4]=useState(false);
  const handleck4=()=>setck4(!ck4);
  const [ck,setck]=useState(false);
  const handleck=()=>{setck(!ck);if(ck4){handleck4();}if(ck2){handleck2();}if(ck3){handleck3();}}

  return (
    <SeasonsContainer click={click}>
      <span className="clud clud1"></span>
      <span className="clud clud2"></span>
      <a href="#" id="spring" className="season spring" >
        <SKILLS to="/skills">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="title" onClick={()=>handleck3()} >Skills</h1>
          </motion.h2>
        </SKILLS>
      </a>
      {ck3?<SkillN ck={ck3}/>:null}
      <div id="summer" className={"season summer"}>
        <BLOG to="/blogN">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1.1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="title" onClick={()=>handleck2()}>Resume</h1>
          </motion.h2>
        </BLOG>
      </div>
      {ck2?<BlogN ck={ck2}/>:null}
      <a href="#" id="fall" className="season fall">
        <WORK to="/work">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 0.9 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="title"  onClick={()=>handleck4()}>Work</h1>
          </motion.h2>
        </WORK>
      </a>
      {ck4?<WorkN ck={ck4}/>:null}
      

      <a
        target="_blank"
        to={{ pathname: "mailto:niteshmishra13579@gmail.com" }}
        id="winter"
        className="season winter"
      >
        <Contact
          target="_blank"
          to={{ pathname: "mailto:niteshmishra13579@gmail.com" }}
        >
          <motion.h2
            initial={{
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1.2 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h1 className="title">Contact</h1>
          </motion.h2>
        </Contact>
      </a>
      <span className="gras"></span>
      <Center click={click} onClick={() => handleClick()}>
        <IoIosArrowForward
          style={{ height: "80px", width: "80px", color: "white" }}
        />
        <IoIosArrowForward
          style={{ height: "80px", width: "80px", color: "white" }}
        />
      </Center>
      {(ck||ck2||ck3||ck4)?<Button className="b" ck={ck} onClick={()=>handleck()} >
        <IoIosArrowForward
          style={{ height: "80px", width: "80px", color: "white" }}
        />
        <IoIosArrowForward
          style={{ height: "80px", width: "80px", color: "white" }}
        /></Button>:null}
    </SeasonsContainer>
  );
};

export default Divcom;
