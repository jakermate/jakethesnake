import React from 'react'
import arrowActive from './img/arrow-active.svg'
import arrowSelect from './img/arrow-select.svg'
import arrowDisabled from './img/arrow-disabled.svg'


export default function ArrowControls(props) {

    return (
        <div style={{position: 'relative', margin: '0 auto', bottom: '0', display: 'grid', gridTemplateColumns:'40px 40px 40px', gridTemplateRows:'40px 40px 40px'}}>
            <div></div>
            <div onClick={e=>props.changeDirection(e.target)} data-direction="up">
                <img src={props.direction === 'up' ? arrowActive : arrowSelect} alt="" style={{pointerEvents:'none',height:'20px',transform: 'rotate(180deg)'}}/>
            </div>
            <div></div>
            <div onClick={e=>props.changeDirection(e.target)} data-direction="left">
                <img src={props.direction === 'left' ? arrowActive : arrowSelect} alt="" style={{pointerEvents:'none',height:'20px',transform: 'rotate(90deg)'}}/>
            </div>
            <div></div>
            <div onClick={e=>props.changeDirection(e.target)} data-direction="right">
                <img src={props.direction === 'right' ? arrowActive : arrowSelect} alt="" style={{pointerEvents:'none',height:'20px',transform: 'rotate(-90deg)'}}/>
            </div>
            <div></div>
            <div onClick={e=>props.changeDirection(e.target)} data-direction="down">
                <img src={props.direction === 'down' ? arrowActive : arrowSelect} alt="" style={{pointerEvents:'none',height:'20px',transform: 'rotate(0deg)'}}/>
            </div>
            <div></div>
        </div>
    )
}
