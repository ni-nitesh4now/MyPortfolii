import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton';
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'
import Me from '../assets/Images/resume.jpg'
import {DarkTheme} from './Themes';


const MainContainer = styled(motion.div)`
background-color: #16191b;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
width:100vw;
heigth:100vh;
.pic{
@media(max-width:50em){
    height:75vh;
    width:100vw;
  }
}
`


// Framer-motion config
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

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    return (
    <ThemeProvider theme={DarkTheme}>
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
              <LogoComponent theme='dark'/>
              <SocialIcons theme='dark'/>
              <PowerButton />
              <Center>
                      <img className="pic" src={Me} alt="Profile Pic" /></Center>
              <BigTitle text="RESUME" top="5rem" left="5rem" />
            </Container>
        </MainContainer>
    </ThemeProvider>
    )
}

export default BlogPage
