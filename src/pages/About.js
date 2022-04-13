import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="container">
        <h3>About Page</h3>
        <Link to="/" className='btn'>Back to Home</Link>
    </div>

  )
}

export default About