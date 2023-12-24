import React from 'react'
import Homepic from '../../src/Assets/Image/hero.jpg'
import '../Component/Home.css'

function MainHome() {
    return (
        <div className='hero'>
            <img style={{ height: '100vh', width: '100%', boxSizing: 'border-box', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} src={Homepic} alt=""
            />
            <div  className='container' style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white', // Set the text color
        }}>
                <h1><span className="heighlight">Search Your Next Home</span></h1>
            </div>
        </div>
    )
}

export default MainHome
