import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    const style = {
backgroundColor: 'red',
display: 'block',
    }
  return (
    <>
    <Navbar/>
    <div style={style}>Hello! Every one this is our home page</div>
    </>
    
  )
}

export default Home