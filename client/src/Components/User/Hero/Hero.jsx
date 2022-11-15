import React, {  useState,useRef } from 'react'
import axios from '../../../Axios'
import Swal from 'sweetalert2'

function Hero() {
      
    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const fourth = useRef(null)
    const fifth = useRef(null)
    const sixth = useRef(null)
    const seventh = useRef(null)
    const eighth = useRef(null)
    const nineth = useRef(null)

    let [state, setState] = useState({})

    let [file, setFile] = useState()

    const [error, setError] = useState(false)

    let handleChange = (e) => {

        console.log(e.target.value );

        let updatedValue = { [e.target.name]: e.target.value }

        console.log(updatedValue);

        setState({ ...state, ...updatedValue })

    }

    let handleFile = (e) => {

        setFile(e.target.files[0])

    }


    let handleApplication = (e) => {

        e.preventDefault()
         
        if (state.name == undefined || state.address == undefined || state.city == undefined || state.state == undefined || state.phone == undefined ||
            state.company == undefined || state.team == undefined || state.product == undefined || state.incubation == undefined
        ) 
        
        {  

            setError(true)
        }

        else {
 
            setError(false)


            const formData = new FormData()

            formData.append('name', state.name)
            formData.append('address', state.address)
            formData.append('city', state.city)
            formData.append('state', state.state)
            formData.append('email', state.email)
            formData.append('phone', state.phone)
            formData.append('company', state.company)
            formData.append('logo', file)
            formData.append('team', state.team)
            formData.append('product', state.product)
            formData.append('incubation', state.incubation)


            console.log(file)
            console.log(formData);
             
            let token = localStorage.getItem('token')

            let config = {
                headers:{
                    'token':token
                }
            }

            axios.post('/application', formData, config

           ).then((response) => {

                console.log(response);

                Swal.fire('Form Submitted Succesfully')      

                first.current.value=''
                second.current.value=''
                third.current.value=''
                fourth.current.value=''
                fifth.current.value=''
                sixth.current.value=''
                seventh.current.value=''
                eighth.current.value=''
                nineth.current.value=''


            }).catch((err) => {

                console.log(err)
            })

        }


    }



    return (

        <div className="bg-slate-200 min-h-screen flex flex-col ">

            <div className="container mx-auto p-10">
                <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
                    <h1 className="mb-8 text-2xl text-center">Application For Incubation</h1>
                          
                    {error&&<p className='text-red-600 text-center mb-3' htmlFor="">All Field Is Required</p>}

                    <form onSubmit={handleApplication} encType='multipart/form-data'>
                        <div className='md:grid grid-cols-2 gap-4'>
                            
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="name"
                                ref={first}
                                placeholder="Name"
                                value={state.name}
                                onChange={(e) => handleChange(e)}

                            />
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="address"
                                ref={second}
                                placeholder="Address"
                                onChange={(e) => handleChange(e)}
                            />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="city"
                                ref={third}
                                placeholder="City"
                                onChange={(e) => handleChange(e)}
                            />

                            
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="state"
                                ref={fourth}
                                placeholder="State"
                                onChange={(e) => handleChange(e)}
                            />

                            <input type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                ref={fifth}
                                placeholder="Email"
                                onChange={(e) => handleChange(e)}
                            />

                            <input type="number"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="phone"
                                ref={sixth}
                                placeholder="Phone"
                                onChange={(e) => handleChange(e)}
                            />

                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="company"
                                ref={seventh}
                                placeholder="Company Name"
                                onChange={(e) => handleChange(e)}
                            />

                            <input type="file"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="logo"
                                placeholder="Company Logo"
                                onChange={(e) => handleFile(e)}

                            />

                        </div>

                        <div>

                            <textarea name="team"
                                id=""
                                className='block border border-grey-light w-full p-3 rounded mb-4'
                                placeholder='Describe Your Team And Background'
                                ref={eighth}
                                onChange={(e) => handleChange(e)}
                            >

                            </textarea>
                            <textarea name="product"
                                id=""
                                className='block border border-grey-light w-full p-3 rounded mb-4'
                                placeholder='Describe Your Company And Product'
                                ref={nineth}
                                onChange={(e) => handleChange(e)}
                            >
                            </textarea>

                            <label className='text-slate-500' htmlFor="">Type Of Incubation</label>
                            <br />
                            <input type="radio" name="incubation" value='physical' onChange={(e) => handleChange(e)} /><span className='text-slate-500 ml-2'>Physical Incubation</span>
                            <br />
                            <input type="radio" name="incubation" value='virtual' onChange={(e) => handleChange(e)} /><span className='text-slate-500 ml-2' >Virtual Incubation</span>

                        </div>
                      

                        <button
                            type="submit"
                            className="w-3/6 text-center sm:ml-28 md:ml-40 mt-2  lg:ml-80 py-3 rounded bg-fuchsia-700 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Register</button>
                    </form>


                </div>

            </div>

        </div>


    )
}

export default Hero