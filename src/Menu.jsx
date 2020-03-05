import React, {useEffect, useState, useLayoutEffect} from 'react'
import styled from 'styled-components'
import anime from 'animejs'

export default function Menu(props) {
    const [active, setActive] = useState('start')
    useEffect(()=>{
        anime({
            targets: '.title-animation',
            translateY: 20,
            delay: anime.stagger(50, {start: 150})
        })
        anime({
            targets: '.title-animation',
            translateY: -6,
            scale: 2,
            color: 'rgb(255,25,255)',
            letterSpacing: 10,
            paddingLeft: 10,
            delay: anime.stagger(50, {start: 1400}),
            direction: 'forwards',
            endDelay: 10,
        })
        anime({
            targets: '.active-button',
            loop: true,
            letterSpacing: 10,
            paddingLeft: 10,
            duration: 1000,
            direction: 'alternate',
            color: `rgba(200,221,11,1)`
        })
        anime({
            targets: '.background-div',
            loop: true,
            scale: .3,
            delay: anime.stagger(10,{
                start: 1000,
                from: 'center'
            }),
            borderRadius: 50,
            borderColor: `rgba(21,123,21,1)`,
            direction: 'alternate',
            duration: 2000
        })
    })
    return (
        <div style={{height: '100%', position: `relative`, zIndex: `50`}}>
            <Background id="container-menu-background">
                
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
                <div className="background-div"></div>
            </Background>
            <MenuView>
                
                <Title id="title-container"><span className="title-animation">S</span> <span className="title-animation">N</span> <span className="title-animation">A</span> <span className="title-animation">K</span> <span className="title-animation">E</span></Title><br/>
                <h5>Menu</h5>
                <button style={{color:'white',background:'none', padding:'10px', border: 'none'}} onClick={e=>props.startGame()}><span className="active-button">START</span></button>
                <button style={{color:'white',background:'none', padding:'10px', border: 'none'}} onClick={e=>{props.toggleAbout(true);console.log('showing about')}}>ABOUT</button>
                <a href="https://www.jakemiller.io">
                    <button style={{color:'white',background:'none', padding:'10px', border: 'none'}}>HOME</button>
                </a>
   
            </MenuView>
        </div>
        
    )
}
const MenuView = styled.div`
    font-family: 'Press Start 2P', cursive;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    position: relative;
    z-index: 200;
    button{
        font-family: 'Press Start 2P', cursive;
        outline: none;
        border: none;
        font-size: 20px;
        background: none;
    }
    h5{
        margin-bottom: 30px;
    }
`
const Title = styled.h3`
    padding-left: 10px;
    position: relative;
    z-index: 10;
    padding-top: 40px;
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 80px;
    span{
        display: inline-block;
    }

`
const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    z-index: 1;
    .background-div{
        width: 10%;
        height: 10%;
        border-radius: 3px;
        box-sizing: border-box;
        border: 1px solid rgba(25,255,255,0);
    }
`