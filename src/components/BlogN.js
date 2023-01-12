import "./sty2.css"
import styled from "styled-components";
import Me from '../assets/Images/resume.jpg'
import { motion } from 'framer-motion'
const MainContainer = styled(motion.div)

const SeasonsContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index:3000;
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
`
const Mainn =  styled.div`
color: ${(props) => props.theme.text};
height: auto;
z-index: 10000000;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(8px);
overflow-x: scroll;
position: absolute;
left: 30%;
height: 100vh;
scrollbar-width: none; 
top:1rem;
@media(max-width:50rem){   
height: 60vh;
    left: 0rem;
    top: 12rem;
    padding:auto;
    margin:auto;
  }
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #31363a;
  width: contain;
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100%;
.pic{
@media(max-width:50em){
  left:1%;
    height:75vh;
    width:100vw;
  }
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
const BlogN=()=>{
  return(
    <SeasonsContainer >
        <span className="clud clud1"></span>
        <span className="clud clud2"></span>
        <div  id="summer" className="season summer active"></div>
        <span className="gras"></span>
    <Mainn>
      <Center><img className="pic" src={Me} alt="Profile Pic" /></Center>
    </Mainn>
</SeasonsContainer>
  );
};

export default BlogN