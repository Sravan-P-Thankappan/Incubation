
import React, { useState, useEffect, useReducer, useContext } from 'react'
import axios from '../../Axios'

function Application() {


    const [view, setView] = useState({})

    const [showModal, setShowModal] = useState(false);

    let [applications, setApplication] = useState([])

    const [reducervalue, applicationUpdate] = useReducer(x => x + 1, 0)


    let applicationStatusChange =

        (value, id) => {

            let confirm = window.confirm('Are You Sure?');

            if (confirm) {

                let config = {
                    headers: {
                        'status': value,
                        'id': id
                    }
                }

                axios.get('/admin/statusupdate', config).then((response) => {

                    console.log(response);
                    applicationUpdate()


                }).catch((err) => {

                    console.log(err);
                })
            }

        }


    useEffect(() => {

        axios.get('/admin/newapplications').then((response) => {

            let { data } = response
            console.log(data);
            setApplication([...data])


        }).catch((err) => {

            console.log(err);
        })
    }, [reducervalue])


    let toggle = (id) => {

        let config = {
            headers: {
                'id': id
            }
        }
        axios.get('/admin/individualapplication', config).then((response) => {

            let { data } = response

            setShowModal(true)
            setView({ ...data })


        }).catch((err) => {
            console.log(err);
        })

    }




    return (

        <>
            {/* <div className='absolute top-5 ml-16 inset-x-32'> */}

            <div className="flex flex-col w-full  ">
                <h1 className=' mt-5 text-center text-2xl font-serif font-bold'>New Application</h1>
                <div className="overflow-x-auto sm:-mr-2 ml-3 lg:mr-16">
                    <div className="py-4 inline-block min-w-full sm:px-6 mr ">
                        <div className="overflow-hidden">
                            <table className="w-full text-center shadow-lg mt-3 mr-12">
                                <thead className="border-b bg-fuchsia-700">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            No
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Company
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Location
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Email
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Details
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {
                                        applications.map((item, index) => {

                                            return (

                                                <tr className="bg-white border-b">

                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.company}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.city}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.email}
                                                    </td>

                                                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap cursor-pointer hover:text-pink-700 "

                                                        onClick={() => toggle(item._id)}
                                                    >
                                                        View

                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <button className='bg-green-500 text-slate-100 w-1/2 p-1 rounded-md shadow-lg' value={'approved'}
                                                            onClick={(e) => applicationStatusChange(e.target.value, item._id)}>
                                                            Approve
                                                        </button>
                                                        <br />

                                                        <button className='bg-red-500 text-slate-100 w-1/2 p-1 rounded-md shadow-lg mt-1' value={'declined'}
                                                            onClick={(e) => applicationStatusChange(e.target.value, item._id)}>
                                                            Cancel
                                                        </button>
                                                    </td>

                                                </tr >
                                            )
                                        })

                                    }

                                </tbody>

                            </table>


                            {
                                showModal &&

                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                    <h3 className="text-xl font-semibold text-center">
                                                        Details
                                                    </h3>
                                                    <button
                                                        className=" ml-auto bg-red-500 border-0 text-slate-200  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <span className=" text-slate-200  mb-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex justify-between">

                                                    <div className=''>
                                                        <p>Company   </p>
                                                        <p>Location  </p>
                                                        <p>Email  </p>
                                                        <p>State</p>
                                                        <p>Product</p>
                                                        <p>Incubation  </p>
                                                        <p>Owner </p>
                                                        <p>Phone </p>

                                                    </div>

                                                    <div className='space-x-12'>
                                                        <p className='ml-12'>:<span></span>   {view.company}</p>
                                                        <p>:<span></span> {view.city}</p>
                                                        <p>:<span></span> {view.email}</p>
                                                        <p>:<span></span> {view.state}</p>
                                                        <p>:<span></span> {view.product}</p>
                                                        <p>:<span></span> {view.incubation}</p>
                                                        <p>:<span></span> {view.name}</p>
                                                        <p>:<span></span> {view.phone}</p>

                                                    </div>


                                                </div>
                                                {/*footer*/}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                                </>

                            }

                        </div>
                    </div>
                </div>

            </div>




            {/* </div> */}

        </>


    )
}

export default Application