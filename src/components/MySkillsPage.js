import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: #16191b;
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
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

const Container = styled.div`
box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #31363a;
padding:10px;
border-radius:20px;
width: 60vw;
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
padding: 2rem;
margin: 5rem;
margin-top: 7em;
z-index: 1;
line-height: 1.5;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
font-family: 'Ubuntu Mono', monospace;
font-style: italic;
height: 60vh;
overflow: auto; 
::-webkit-scrollbar {
    display: none;
  }
@media(max-width:50rem){   
height: 45vh;
}
`

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
background:rgb(115, 147, 179);
`
const S= styled.div`
position: absolute;
right: -7px;
top: -22px;
font-weight: 400;
color: white;
font-size: 14px;
text-transform: uppercase;
letter-spacing: 2px;
opacity: 0.9;
text-align: center;
white-space: nowrap;
`
const MySkillsPage = () => {
    return (
    <ThemeProvider theme={DarkTheme}>
            <Box>
            <LogoComponent theme='dark'/>
            <SocialIcons theme='dark'/>
            <PowerButton />
            <BigTitle text="SKILLS" top="80%" right="30%" />
                <Container>
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

                </Container>
                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>

    </ThemeProvider>
        
    )
}

export default MySkillsPage
