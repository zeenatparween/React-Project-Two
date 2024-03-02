import React from 'react'
import styled from 'styled-components'

const ShowRules = () => {
    return (
        <RulesContainer>
            <h2>How to Play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on dice if selected number is equal to dice number
                    you will get some point as dice{" "}
                </p>
                <p>If you get Wrong guess than 2 point will be dedcuted</p>
            </div>

        </RulesContainer>
    )
}

export default ShowRules

export const RulesContainer = styled.div`
max-width:800px;
margin: 0 auto;
background-color: #e9dcdcd4;
padding: 24px;
margin-top:10px;
border-radius: 10px;
line-height: 20px;

h2{
    font: 24px;
    margin-top: 0px;
}
  
  .text{
    margin-top:10px;
  }
` 
