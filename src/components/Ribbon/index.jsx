import React from 'react'
import './ribbon.scss'

function Ribbon() {
  return (
    <div className="ac-ribbon">
        <p className="ac-ribbon--content">
            The Apple Shopping Event is coming. From November 25 through 28 get up to a $250 Apple Gift Card when you buy an eligible Mac.
            <a href="http://localhost:3000" className="ac-ribbon--content-link">Get an early look</a>
        </p>
    </div>
  )
}

export default Ribbon