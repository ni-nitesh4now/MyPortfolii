import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import TextScrambler from "react-scramble-text";


const Icons = styled.div`
align-items: center;
margin-right:10px;
padding:10px;
position: fixed;
right:0%;
bottom:0%;
z-index:3;
h4{ 
margin-right:10px;
padding:10px;
color:#3f4041;
height:auto;
width:auto;
h4:hover{
  transform:scale(1.2);
  transition: all  0.3s ease;
  border-bottom: 2px solid #3f4041;
}
}

`
const Insta=[' ', 'Instagram']
const git=[' ', 'GitHub']
const LinkedIn=[' ','LinkedIn']

const SocialIcons = (props) => {
    return (
        <Icons>
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://instagram.com/ni_nitesh4now"}}><h4><TextScrambler phrases={Insta} speed={100} pauseTime={1} repetitions={1}/></ h4>
                </NavLink>
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://github.com/ni-nitesh4now"}}>< h4><TextScrambler phrases={git} speed={100} pauseTime={1} repetitions={1}/></ h4>
                </NavLink>
                <NavLink style={{color:'inherit'}}  target="_blank"   to={{pathname:"https://www.linkedin.com/in/ni-nitesh4now"}}>< h4><TextScrambler phrases={LinkedIn} speed={100} pauseTime={1} repetitions={1}/></ h4>
                </NavLink>
        </Icons>
    )
}

export default SocialIcons
