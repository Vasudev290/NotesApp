import React, { useState } from 'react'
import Axios from 'axios'
const Signup = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const response = await Axios.post('http://localhost:5000/api/auth/register', {name, email, password});
        console.log(response)
    } catch(error) {
        console.log(error)
    }
}
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='border shadow p-6 w-80 bg-white'>
        <h2 className='text-2xl font-bold mb-4'>Signup</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='block text-grey-700'>Name</label>
                <input type="text" className='w-full px-3 py-2 boader' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className='mb-4'>
                <label  className='block text-grey-700'>Email</label>
                <input type="email" className='w-full px-3 py-2 boader' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className='mb-4'>
                <label className='block text-grey-700'>Password</label>
                <input type="password" className='w-full px-3 py-2 boader' placeholder='********' onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className='mb-4'>
            <button type='submit' className='w-full bg-teal-600 text-white py-2'>Signup</button>
            <p className='text-center'>Already Have Account? <a href="">Login</a></p>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup