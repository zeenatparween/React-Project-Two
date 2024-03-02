import React from 'react'
import styled from 'styled-components'


const RoleDice = ({ currentDice, roleDice }) => {




    return (
        <DiceContainer>
            <div className='dice'
                onClick={roleDice}
            >
                <img src={`/dice_${currentDice}.png`} alt="dice1" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContainer>
    )
}

export default RoleDice


export const DiceContainer = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;

 .dice{
    cursor: pointer;
 }
 .dice:hover{
    transition: 2px solid green
 }
 p {
    font-size: 20px;
    margin-top: 0px;
    font-weight: 500;
}
img{
    width:190px;
    height:190px;
}
    
`