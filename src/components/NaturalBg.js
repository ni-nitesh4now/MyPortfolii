import './sty.css';
import styled, { keyframes } from 'styled-components'


import Divcom from "./divcom";

const Main=styled.div`
height:100vh;
width:100vw;
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


const Mainn =  styled.div`
  border: 2px solid black;
  color: black;
  padding: 2rem;
  width: 50vw;
  height: auto;
  z-index: 1;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  position: absolute;
  left: 20%;
  top: 12rem;
  @media(max-width:50em){
      left: 2rem;
      padding:auto;
      margin:auto;
    }
`


const Salutation=['Namaskar','Bonjour','Namaste','Salve','Hola','Yasou','Nǐ hǎo','Hi','Hello','Zdravstvuyte']

const SalR=[' ',Salutation[Math.floor(Math.random()*10)]]

const LeftBar = styled.div`
  position: absolute;
  z-index: 1;
`;


const NaturalBg = () => {
    return(
        <Main>
        <div className='landscape'>
            <div className="mountain"></div>
  <div className="mountain mountain-2"></div>
  <div className="mountain mountain-3"></div>
  <div className="sun-container sun-container-1">
  </div>
  <div className="sun-container">
    <div className="sun"></div>
  </div>
  <div className="cloud"></div>
  <div className="cloud cloud-1"></div>
  <div className="sun-container sun-container-reflection">
    <div className="sun"></div>
  </div>
  <div className="light"></div>
  <div className="light light-1"></div>
  <div className="light light-2"></div>
  <div className="light light-3"></div>
  <div className="light light-4"></div>
  <div className="light light-5"></div>
  <div className="light light-6"></div>
  <div className="light light-7"></div>
  <div className="water"></div>
  <div className="splash"></div>
  <div className="splash delay-1"></div>
  <div className="splash delay-2"></div>
  <div className="splash splash-4 delay-2"></div>
  <div className="splash splash-4 delay-3"></div>
  <div className="splash splash-4 delay-4"></div>
  <div className="splash splash-stone delay-3"></div>
  <div className="splash splash-stone splash-4"></div>
  <div className="splash splash-stone splash-5"></div>
  <div className="lotus lotus-1"></div>
  <div className="lotus lotus-2"></div>
  <div className="lotus lotus-3"></div>
  <div className="front">
    <div className="stone"></div>
    <div className="grass"></div>
    <div className="grass grass-1"></div>
    <div className="grass grass-2"></div>
    <div className="reed"></div>
    <div className="reed reed-1"></div>
  </div>
        </div>
        
      <Mainn>
        <h3>
        <h3>{SalR},</h3><br/>I am Nitesh Mishra, a Developer from Delhi, India.  I love to code, paint and write poetries.
            <br /> <br/> Currently persuing UG from NSUT(CSE24), Delhi.</h3>
      </Mainn>
  
  <LeftBar>
      <Divcom />
    </LeftBar>
        </Main>
        )
}

export default NaturalBg