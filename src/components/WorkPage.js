import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import {motion} from 'framer-motion';

import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';

import { Work } from "../data/WorkData";
import Card from '../subComponents/Card';
import BigTitlte from '../subComponents/BigTitlte';

const Box = styled.div`
background-color:  #16191b;
height:400vh;
position: relative;
display: flex;
align-items: center;


`

const Main = styled(motion.ul)`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color:white;
@media(max-width:50em){
    left: 2rem;
    padding:auto;
    margin:auto;
  }
`
const Rotate = styled.span`
display:block;
position: fixed;
right:1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index:1;
`


// Framer-motion Configuration
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

const WorkPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);



    useEffect(() => {
        let element = ref.current;
       
        
        const rotate = () => {
         
         element.style.transform = `translateX(${-window.pageYOffset/4}px)`
      
         
          return (yinyang.current.style.transform = `rotate(180deg)`)
        }
    
        window.addEventListener('scroll', rotate)
        return () => {
          window.removeEventListener('scroll', rotate);
          
        }
      }, [])


    return (
        <ThemeProvider theme={DarkTheme}>
<Box>
<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
     <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
         {
            Work.map( d => 
            <Card key={d.id} data={d} />
            )
         }
     </Main>
<Rotate ref={yinyang}>
</Rotate>

<BigTitlte text="Projects" top='10%' right="20%" />
        </Box>

        </ThemeProvider>
        
    )
}

export default WorkPage
