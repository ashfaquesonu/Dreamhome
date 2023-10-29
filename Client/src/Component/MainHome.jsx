import React from 'react'
import Homepic from '../../src/Assets/Image/hero.jpg'

function MainHome() {
    return (
        <div>
            <img style={{height:'100vh' , width:'100%' ,boxSizing: 'border-box' ,backgroundPosition:'center',backgroundRepeat:'no-repeat'}} src={Homepic} alt="" 
            />
        </div>
    )
}

export default MainHome
