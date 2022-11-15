import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from '../../../Axios'
import { useNavigate } from 'react-router-dom'




function Register() {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [password, setPassword] = useState('')
    let [error, setError] = useState(false)

    let [userexist, setExistEr] = useState(false)
    let navigate = useNavigate()

    const handleSubmit = (e) => {

            console.log('signup');
        e.preventDefault()


        if (
            name.length == 0 || name.length < 3 || email.length == 0 || phone.length < 10 || password.length < 4
        ) {
            setError(true)
        }

        else {


            let userDetails = {
                name,
                email,
                phone,
                password
            }
            console.log(userDetails);

            axios.post('/signup', userDetails).then((response) => {

                console.log(response);
                let { data } = response
                if (data.err) setExistEr(true)

                else {
                    navigate('/')
                }

            }).catch((err) => console.log(err))

        }


    }

    return (

        <div>
            <div class="bg-slate-200 min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        {userexist && <label className='text-red-600 text-center' htmlFor="">Email Id Is Existing</label>}

                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                placeholder=" Name"
                                onChange={(e) => setName(e.target.value)} />

                            {error && name.length < 3 ? <label className='text-red-700'>Write  Username</label> : null}
                            <br />

                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)} />


                            {error && email.length == 0 ? <label className='text-red-700'>Write  Email</label> : null}
                            <br />

                            <input
                                type="number"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="phone"
                                placeholder="Phone Number"
                                onChange={(e) => setPhone(e.target.value)} />

                            {error && phone.length < 10 ? <label className='text-red-700'>Phone number required</label> : null}
                            <br />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && password.length < 4 ? <label className='text-red-700'>Password length must be 4</label> : null}
                            <br />


                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded bg-fuchsia-700 text-white  focus:outline-none my-1"
                            >Create Account</button>

                        </form>


                    </div>

                    <div class="text-grey-dark mt-6">
                        Already have an account?
                        <Link className='hover:text-fuchsia-700' to={'/'}>Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register