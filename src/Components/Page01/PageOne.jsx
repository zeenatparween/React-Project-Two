import React from 'react'
import { Button } from '../Button.jsx'
import './PageOne.css'
const PageOne = ({ toggle }) => {

    return (
        <div>
            <div className="hero">
                <div className="hero-left">
                    <img src="./dices.png" alt="" />
                </div>
                <div className="hero-right">
                    <h1>DICE GAME</h1>
                    <Button
                        onClick={toggle}
                    >Play Now</Button>
                </div>
            </div>
        </div>
    )
}

export default PageOne
