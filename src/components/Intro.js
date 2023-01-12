import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
-webkit-overflow-scrolling: touch;
    -webkit-box-pack: center;
    -o-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -o-box-align: center;
    -ms-flex-align: center;
    align-items: center;overflow-y: hidden;
    position: absolute;
    display: -webkit-box;
    display: -ms-flexbox;
    display: box;
    display: flex;
    bottom: 50px;
    right: 0;
    left: 0;
    top: 10px;
    color:#e2e6e8;
    font-family: 'Gruppo', cursive;
    box-sizing: border-box;
`

const Wrapper=styled.div`
    max-width: 720px;
    font-family: 'Gruppo', cursive;
    padding: 24px 16px;
    margin: auto;
    width: 100%;
    h2 {
      padding:10px;
      margin:5px;
    }
    h3{
      padding:10px;
      margin-left:5px;
    }
`
const Salutation=['Namaskar','Bonjour','Namaste','Salve','Hola','Yasou','Nǐ hǎo','Hi','Hello','Zdravstvuyte']

const SalR=[' ',Salutation[Math.floor(Math.random()*10)]]

const ph=[' ','I am Nitesh Mishra, a Developer from Delhi, India.  I love to code, paint and write poetries.']
const ph2=[' ','']
const ph3=[' ',' Currently persuing UG from NSUT(CSE24), Delhi.']

const Intro =()=>{
      return ( 
          <>
          <Container>
              <Wrapper>
                  <div>
                    <h3>{SalR}</h3>
                      <h2 className='text'>
                        {ph} <br/>
                        {ph2} <br/>
                        {ph3} <br/>
                      </h2>
                  </div>
              </Wrapper>
          </Container>
          </>
          )
  }


export default Intro;

