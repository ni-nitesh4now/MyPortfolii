import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'
import "./glitch.css";



const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`




const LogoComponentg = (props) => {
    return (
        <Logo className='logo' color={props.theme}>
          <div className='wrapper'><h1 className='glitch'>Ni_Nitesh</h1></div>
        </Logo>
    )
}

export default LogoComponentg
