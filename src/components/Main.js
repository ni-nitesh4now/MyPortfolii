
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";
import NaturalBg from "./NaturalBg";
import LogoComponentg from "../subComponents/LogoComponentg";
import TextScrambler from "react-scramble-text";
import Preload from "./Preload";

const MainContainer = styled.div`
  background-color: #16191b;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;


const Button=styled.button`
position:fixed;
top:6%;
margin:10px;
padding: 0.3rem;
border-radius: 25%;
border: 1px solid #000;
width: 4rem;
height: 1.5rem;
display: flex;
justify-content: center;
align-items:center;
z-index:3;
cursor: pointer;
padding:0 19px;
color:white;
background:${props=>props.click?'black':'#8a65cc'};
right:5%;
@media(max-width:50em){
  visibility:hidden;
}
`

const WORK = styled(NavLink)`
color:  ${props => props.click ? 'black':'pink'};
position: absolute;
left:10%;
height:auto;
width:auto;
padding:3px;
border-radius:4px;
text-decoration: none;
background:none;
z-index:1;
h3:hover{
  transform:scale(1.2);
  transition: all  0.3s ease;
  border-bottom: 3px solid white;
}
@media(max-width:50em){
  left: 6%;
}
`

const SKILLS = styled(NavLink)`
color:  ${props => props.click ? 'black':'pink' };
position: absolute;
height:auto;
width:auto;
padding:3px;
border-radius:4px;
left:30%;
text-decoration: none;
background:none;
z-index:1;
h3:hover{
  transform:scale(1.2);
  transition: all  0.3s ease;
  border-bottom: 3px solid white;
}
`

const BLOG = styled(NavLink)`
color:  ${props => props.click ? 'black':'pink' };
position: absolute;
left:52%;
height:auto;
width:auto;
padding:3px;
border-radius:4px;
text-decoration: none;
background:none;
z-index:1;
h3:hover{
  transform:scale(1.2);
  transition: all  0.3s ease;
  border-bottom: 3px solid white;
}
@media(max-width:50em){
  left: 49%;
}
`
const Container = styled.div`
top:0%;
left:0%;
`

const Contact = styled(NavLink)`
color:  ${props => props.click ? 'black':'pink' };
position: absolute;
left:73%;
height:auto;
width:auto;
padding:3px;
border-radius:4px;
text-decoration: none;
background:none;
z-index:1;
h3:hover{
  transform:scale(1.2);
  transition: all  0.3s ease;
  border-bottom: 3px solid white;
}

`

const LeftBar = styled.div`
position: absolute;
border:none;
top:65%;
left:28%;
padding:5px;
border-radius:40px 40px 40px 40px;
outline:none;
display:flex;
flex-direction:column;
justify-content:center;
overflow:hidden;
align-items:left;
height:20vh;
z-index:1;
width:40vw;
@media(max-width:50em){
  width:60vw;
  left:20%;

}
`

const contact=[' ','Contact']
const blog=[' ','Resume']
const work=[' ','Projects']
const skill=[' ','Skills']


const Main = () => {
  const [showElement,setShowElement] = React.useState(false)
  useEffect(()=>{
    setTimeout(function() {
      setShowElement(true)
         }, 4000);
       },
   [])
  const [Hide, setHide]=useState(true)
  useEffect(()=>{
    setTimeout(function(){setHide(!Hide)},3000);
  },[])
    

    const [clk, setClk] = useState(false);
    const handleClk = () => setClk(!clk);
   

  return (
    <MainContainer>
    <Button onClick={handleClk} click={clk} theme={clk ? 'dark' :'light'} className={'toggle-button'+(clk ? 'toggle-class':'')}>{clk?'Virtual':'Natural'}</Button>
    {clk ? <NaturalBg click={clk} /> :null}
      <Container>
        {clk?<LogoComponent theme={!clk ? 'dark' :'light'}/>:<LogoComponentg theme={!clk?'dark':'light'}/>}
        
        <SocialIcons theme={!clk ? 'dark' :'light'} />
      </Container>
      
      {clk ?null:showElement?null:<Preload/>}

        {clk ?null: Hide?null:<Intro/>}
      {clk ?null: Hide?null:
      <LeftBar click={clk}>
            <Contact target="_blank" to={{pathname:"mailto:niteshmishra13579@gmail.com"}}  >
                    <h3><TextScrambler phrases={contact} speed={100} pauseTime={1} repetitions={1}/></h3>
            </Contact>
            <BLOG to="/blog"  >
                    <h3 ><TextScrambler phrases={blog} speed={100} pauseTime={1} repetitions={1}/></h3>
            </BLOG>
            <WORK to="/work"  >
                    <h3><TextScrambler phrases={work} speed={100} pauseTime={1} repetitions={1}/></h3>
            </WORK>
            <SKILLS to="/skills"  >
                    <h3><TextScrambler phrases={skill} speed={100} pauseTime={1} repetitions={1}/></h3>
            </SKILLS>
            </LeftBar>}
    </MainContainer>
  );
};

export default Main;
