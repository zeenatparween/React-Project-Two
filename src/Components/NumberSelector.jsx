import React from 'react'

import styled from 'styled-components'

const NumberSelector = ({
    setError, error, selectNum, setSelectNum
}) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const NumberSelectorHandler = (value) => {
        setSelectNum(value)
        setError("")

    }

    console.log(selectNum)

    return (
        <NumberContainer>
            <p className='error'>{error}</p>
            <div className='flex'>
                {arrNumber.map((value, i) => (
                    <Box
                        isSelected={value === selectNum}
                        key={i} onClick={() => NumberSelectorHandler(value)}>
                        {value}</Box>

                ))}

            </div>
            <p>Select Number</p>
        </NumberContainer>
    );
};

export default NumberSelector

const NumberContainer = styled.div`
.flex{
    display: flex;
    gap: 20px;
    
}
.error{
    color:red;
    margin-bottom: 0px;
}
    p{
        font-weight: 500;
        margin-top: 0px;
        font-size: 20px;
        text-align: end;
    }
`


const Box = styled.div`
    height:50px;
    width:50px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`
