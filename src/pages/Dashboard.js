import React from 'react'

const Dashboard = ({user}) => {
  return (
    <div className='container'>
        <h2>Dashboard</h2>
        <h3>Name:{user.name}</h3>
        <h3>Email : {user.email}</h3>
    </div>
  )
}

export default Dashboard