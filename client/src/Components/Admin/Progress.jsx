import React, { useEffect, useState } from 'react'
import axios from '../../Axios'

function Progress() {

    const [application, setApplication] = useState([])

    useEffect(() => {

        axios.get('/admin/allapplication').then((response) => {

            let { data } = response

            setApplication([...data])


        }).catch((err) => {

            console.log(err);
        })

    }, [])

    return (
        <>

            <div className="flex flex-col w-full  ">
                <h1 className=' mt-5 text-center text-2xl font-serif font-bold'> Application Progress</h1>
                <div className="overflow-x-auto sm:-mr-2 ml-3 lg:mr-16">
                    <div className="py-4 inline-block min-w-full sm:px-6 mr ">
                        <div className="overflow-hidden">
                            <table className="w-full text-center shadow-lg mt-3 mr-12">
                                <thead class="border-b bg-fuchsia-700">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            No
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            Company
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                            Progress
                                        </th>


                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        application.map((item, index) => {


                                            return (


                                                <tr class="bg-white border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {item.company}
                                                    </td>

                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {
                                                            item.status === 'booked' &&
                                                            <div className="relative pt-1">
                                                                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                                                                    <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">Approved</div>
                                                                </div>
                                                            </div>
                                                        }

                                                        {
                                                            item.status === 'new' &&
                                                            <div className="relative pt-1">
                                                                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                                                                    <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500">Pending</div>
                                                                </div>
                                                            </div>
                                                        }

                                                        {
                                                            item.status === 'declined' &&
                                                            <div className="relative pt-1">
                                                                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                                                                    <div style={{ width: "100%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500">Canceled</div>
                                                                </div>
                                                            </div>
                                                        }

                                                    </td>
                                                </tr >

                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Progress