import React from 'react'
import './Home.css';
import image from '../images/page3.png'
function Home() {
  return (
    <>
      <img src={image}/>
      <div className='Parph' style={
        {
          color:'white'
        }
      } 
      >
        <p> Be  <span> </span></p>
        <button>
          Subscribe
        </button>
      </div>
    </>
  )
}

export default Home
