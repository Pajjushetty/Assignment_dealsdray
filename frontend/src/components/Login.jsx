// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import Button from '@mui/material/Button';

// const Login = () => {
//     let [email, setEmail] = useState('')
//     let [password, setPassword] = useState('')
//     let navigate = useNavigate()

//     let login = () => {
//         let payload = { email, password }
//         axios.post('http://localhost:4001/login', payload)
//             .then((e) => {
//                 if (e.data.status == "success") {
//                     navigate(`/dashbord/${e.data.id}`)
//                 }
//                 else if (e.data.status == "fail") {
//                     alert("wrong password")
//                 }
//                 else if (e.data.status == "noUser") {
//                     alert("Invalid Email")
//                 }
//             })
//     }

//     return (
//         <div>
//             <div className=' max-w-[940px]  h-[450px] border-4 border-blue-900 mx-auto shadow-xl scale-75 p-[30px]'>
//                 <h1 className='text-center font-bold text-2xl my-3'>Login Form</h1>
//                 <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-10'>
//                     <input className='bg-yellow-200 border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Email' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
//                     <br />
//                     <input className='bg-yellow-200 border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Password' type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />
//                     <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={login}>LOGIN</button>
//                     <br />
//                     <p>do not have Account? <Button variant="outlined"><Link to='/register'> Sign Up</Link></Button> </p>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Login


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        let payload = { email, password }
        axios.post('http://localhost:4001/login', payload)
            .then((e) => {
                if (e.data.status == "success") {
                    navigate(`/dashbord/${e.data.id}`)
                }
                else if (e.data.status == "fail") {
                    alert("wrong password")
                }
                else if (e.data.status == "noUser") {
                    alert("Invalid Email")
                }
            })
    }

    return (
        <div className="bg-blue-500 min-h-screen flex items-center justify-center p-5">
            <div className="bg-blue-900 flex rounded-2xl shadow-lg max-w-3xl p-4">
                <div className="sm:w-1/2 px-14">
                    <h2 className="font-bold text-2xl text-blue-100 my-4">Login Form</h2>
                    <div className="border border-red-600 lg:w-[300px] mx-auto my-5 p-10">
                        <div className="flex flex-col mb-4">
                            <label htmlFor="email" className="text-blue-100">
                                Email:
                            </label>
                            <input
                                id="email"
                                className="bg-yellow-200 border-2 border-violet-400 text-black my-3 placeholder-black w-full md:w-[200px] lg:w-[200px] px-3 py-2 rounded"
                                placeholder="Enter your email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label htmlFor="password" className="text-blue-100">
                                Password:
                            </label>
                            <input
                                id="password"
                                className="bg-yellow-200 border-2 border-violet-400 text-black my-3 placeholder-black w-full md:w-[200px] lg:w-[200px] px-3 py-2 rounded"
                                placeholder="Enter your password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="bg-red-300 ml-1 rounded-lg p-1 text-black"
                            onClick={login}
                        >
                            LOGIN
                        </button>
                        <p className="text-blue-100 my-3">
                            Don't have an account?{' '}
                            <Button variant="outlined" component={Link} to="/register">
                                Sign Up
                            </Button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;



