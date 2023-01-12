
import styled from 'styled-components';


const Contaier=styled.div`

z-index: 3;
`

const Grid =styled.div`

z-index: 3;
width: 100%;
height: 600px;
overflow: hidden;
perspective: (600px * 0.75);
`

const GridF=styled.div`

z-index: 3;
width: 100%;
height: 100%;
position: absolute;
background: blue;
`

const GridL=styled.div`
width: 100%;
height: 200%;
z-index: 3;
background-image: linear-gradient(to right, rgba(7, 203, 121, 0.3) 1px, transparent 0), linear-gradient(to bottom, rgba(7, 203, 121, 0.3) 1px, transparent 0);
background-size: 45px 30px;
background-repeat: repeat;
transform-origin: 100% 0 0;
animation: play 15s linear infinite;

@keyframes play {
	0% {
		transform: rotateX(45deg) translateY(-50%);
	}
	100% {
		transform: rotateX(45deg) translateY(0);
	}
}
`

const Virtual=()=>{

    return (
        <Contaier>
            <Grid>
                <GridF/>
                <GridL/>
	        </Grid>
        </Contaier>
    )
}

export default Virtual