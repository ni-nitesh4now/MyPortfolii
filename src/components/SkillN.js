import "./sty2.css"
import styled from "styled-components";


const Mainn =  styled.div`
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
width: 50vw;
margin: 5rem;
height: auto;
z-index: 10000000;
line-height: 1.5;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(8px);
position: absolute;
left: 15%;
top: 1rem;
height: 70vh;
@media(max-width:50rem){   
height: 60vh;
    left: 9rem;
    top: 8rem;
    padding:auto;
    margin:auto;
  }
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #31363a;
  border-radius:20px;
  width: 60vw;
  line-height: 1.5;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`


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

const Skill =styled.div`
margin: 5px;
width:100%;
padding: 15px;
border:none;
margin-left:0px;
border-radius:20px;
`

const Bar = styled.div`
background:rgb(54, 54, 54);
height: 10px;
border:none;
border-radius:14px;
background:white;
`

const Progress=styled.div`
visibility: visible;
animation-duration: 0.5s;
animation-delay: 0.3s;
animation-name: fadeInLeft;
overflow: visible;
height: 10px;
position: relative;
border-radius: 14px;
background:rgb(15, 17, 160);
`
const S= styled.div`
position: absolute;
right: -7px;
top: -22px;
font-weight: 400;
color: black;
font-size: 14px;
text-transform: uppercase;
letter-spacing: 2px;
opacity: 0.9;
text-align: center;
white-space: nowrap;
`

const Title2 = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(.9em + 1vw);

`
const Title3 = styled.h2`
display: flex;
font-size: calc(0.8em);
`


const SkillN=()=>{
  return(
    <SeasonsContainer >
        <span className="clud clud1"></span>
        <span className="clud clud2"></span>
      <div  id="summer" className="season spring active"></div>
      <span className="gras"></span>
      
      <Mainn>
        <Title2>My Skills</Title2>
        <Skill>
                <Title3>Web Developement - Front End</Title3>
                <Bar><Progress style={{width:'90%'}}><S>90%</S></Progress></Bar>
        </Skill>

        <Skill>
            <Title3>GUI Design</Title3>
            <Bar><Progress style={{width:'70%'}}><S>70%</S></Progress></Bar>
        </Skill>
        <Skill>
            <Title3>MySQL</Title3>
            <Bar><Progress style={{width:'70%'}}><S>70%</S></Progress></Bar>
        </Skill>
        <Skill>
               <Title3>InterPersonal Skills</Title3>
               <Bar><Progress style={{width:'80%'}}><S>80%</S></Progress></Bar>
        </Skill>
        <Skill>
              <Title3>Research and Analytics</Title3>
              <Bar><Progress style={{width:'75%'}}><S>75%</S></Progress></Bar>
        </Skill>
        <Skill>
              <Title3>Python</Title3>
             <Bar><Progress style={{width:'60%'}}><S>60%</S></Progress></Bar>
        </Skill>
      </Mainn>
  
    </SeasonsContainer>
  );
};

export default SkillN