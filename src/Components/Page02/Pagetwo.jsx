import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import NumberSelector from '../NumberSelector'
import RoleDice from '../RoleDice'
import { Button } from '../Button.jsx'
import ShowRules from '../ShowRules.jsx'

const Pagetwo = () => {
    const [score, setScore] = useState(0)
    const [selectNum, setSelectNum] = useState();
    const [currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState(" ")
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min))
        return Math.floor(Math.random() * (max - min) + min)
    }

    const roleDice = () => {
        if (!selectNum) {
            setError("You have not selected any number")
            return
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);



        if (selectNum === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectNum(undefined)

    }

    const resetScore = () => {
        setScore(0)

    }


    return (

        <div>
            <MainContainer>
                <div className="main">
                    <ScoreContainer>
                        <h1>{score}</h1>
                        <p>Total Scores</p>
                    </ScoreContainer>
                    <NumberSelector
                        error={error}
                        setError={setError}
                        selectNum={selectNum}
                        setSelectNum={setSelectNum} />

                </div>
                <RoleDice
                    currentDice={currentDice}
                    roleDice={roleDice}
                />
                <div className="btn">
                    <Button
                        className='btnone'
                        onClick={resetScore}
                    >Reset Score</Button>
                    <Button
                        onClick={() => setShowRules((prev) => !prev)}
                    >
                        {showRules ? "Hide" : "Show"}
                        Show Rules</Button>

                </div>
                {showRules && <ShowRules />}
            </MainContainer>
        </div >
    )
}

export default Pagetwo

export const MainContainer = styled.div`
    .main{
        display: flex;
        padding-top:10px;
        justify-content:space-between;
        align-items: center;
    }
    .btn{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        align-items: center;
        justify-content: center;
        
    }
   
`
export const ScoreContainer = styled.div`
     
      max-width: 150px;
      /* background-color: red; */
      line-height: 50px;
      
      
    h1 {
        margin-top: 10px;
        font-size:100px;
        margin-bottom: 0px;
        text-align: center;
        
        /* line-height: 100px; */
       
    }
    p{
        font-size: 20px;
        font-weight: 500px;
        margin-top: 0px;
    }
`