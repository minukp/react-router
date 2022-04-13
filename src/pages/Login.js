import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setUser}) => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!email || !name) return ;
    setUser({name:name,email:email})
    navigate('/dashboard');

    console.log(name,email);  

  }

  return (
    <section className='container'>
      <form action="" onSubmit={handleSubmit}>
        <div className='form-input'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='form-input'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button className='btn'>Login</button>

      </form>
    </section>
  )
}

export default Login