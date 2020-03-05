import React, {useEffect,useState, useRef} from 'react'
import styled from 'styled-components'
import anime from 'animejs'
export default function GameOver(props) {
    const [array, setArray] = useState([])
    const REF_ARRAY = useRef(array)
    REF_ARRAY.current = array
    useEffect(()=>{
        let newarray = []
        let gridX = props.width / props.blockSize
        let gridy = props.height / props.blockSize
        for(let i = 0; i < gridX*gridy; i++){
           newarray.push('')
        }
        setArray(newarray)

        
        console.log(REF_ARRAY.current)
    },[])
    useEffect(()=>{
        anime({
            targets: `.block`,
            delay: anime.stagger(10,{
                from: 'center'
            }),
            scale: .3,
            background: `rgba(225,15,225,.7)`,
            loop: true,
            direction: 'alternate',
            endDelay: 1000,
            easing: `easeInQuad`
        })
    },[array])
    return (
        <GameOverView blockSize={props.blockSize}>
            <div className="flex">
                <GameOverHeader>GAME OVER</GameOverHeader>
                <div>FINAL SCORE <span>{props.eaten}</span></div>
                <ButtonContainer className="button-container">
                    <button onClick={e=>props.gameReset}>
                        TRY AGAIN
                    </button>
                </ButtonContainer>
            </div>
            <div className="background">
                <div className="grid">

                    {
                        REF_ARRAY.current.map((content, index)=>{
                            return(
                                <div className="block"></div>

                            )

                        })
                    }
                   
                
               </div>
            </div>
        </GameOverView>
    )
}
const GameOverView = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: -1px;
    right: -1px;
    bottom: 0;
    z-index: 3;
    flex-direction: column;
    justify-content: space-around;
    font-family: 'Press Start 2P', cursive;
    .flex{
        position: relative;
        z-index: 3;
    }
    .background{
        position: absolute;
        
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

    }
    .grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
       
    }
    .block{
        background: rgba(0,0,0,0);
        border: 1px solid rgba(12,123,55,.3);
        box-sizing: border-box;
        height: ${props=>`${props.blockSize}px`};
        width: ${props=>`${props.blockSize}px`};

    }
`
const GameOverHeader = styled.h2`
    margin-bottom: 20px;
`
const ButtonContainer = styled.div`
    margin-top: 40px;
    
    button{
        background: none;
        color: white;
        font-family: 'Press Start 2P', cursive;
        padding: 10px 20px;
        border: 5px solid white;
        border-radius: 20px;
        &:active, :hover{
            outline: none;
        }
    }
`