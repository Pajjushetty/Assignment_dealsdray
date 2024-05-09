import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useParams } from 'react-router-dom'
import Button from '@mui/material/Button';

const DashBord = () => {
  let [name, setname] = useState("")
  let ID = useParams()

  useEffect(() => {
    axios.get(`http://localhost:4001/user/${ID.ID}`)
      .then((e) => {
        setname(e.data)

      })
      .catch(() => { console.log("unable to fetch data in Edit comp"); })
  }, [])

  return (
    <div>
      <div id='navbar' className='bg-gray-300  '>
        <ul className='flex gap-24 px-10'>
          <li className='hover:text-gray-300'>Home</li>
          <li>
            <Button variant="text" component={Link} to='/create-employee'>Create Employee</Button>
          </li>
          <li>
            <Button variant="text" component={Link} to="/employee-list">Employee List</Button>
          </li>
          <li className='p-2 text-red-500 border border-dashed border-red-400 rounded'>{name}</li>
          <li className='hover:text-gray-300'>Logout</li>
        </ul>
        <div className='flex items-center justify-center h-12 w-12 bg-white rounded-full text-black font-bold'>

        </div>
      </div>
      <div className='bg-white rounded-lg shadow-xl p-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
        <p className='text-lg text-gray-700'>Welcome to the admin panel</p>
      </div>
    </div>
  )
}

export default DashBord