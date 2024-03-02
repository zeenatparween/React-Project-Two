import React from 'react'
import styled from 'styled-components'

const Buttons = (props) => {
  return (
    <div>
      <Button

      >{props.text}</Button>


    </div>
  )
}

export default Buttons

export const Button = styled.button`
  color: white;
  padding: 10px 14px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;

  }
`