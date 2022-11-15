import React, { useEffect, useState } from 'react'
import axios from '../../Axios'

function Approvedapplication() {

    let [approvedApplication, setData] = useState([])

    useEffect(() => {

        axios.get('/admin/approvedapplication').then((response) => {

            let { data } = response
            //    console.log(data);
            setData([...data])

        }).catch((err) => {

            console.log(err)
        })

    }, [])

    console.log(approvedApplication);


    return (


        <div className="flex flex-col w-full  ">
                <h1 className=' mt-5 text-center text-2xl font-serif font-bold'>Approved Application</h1>
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
                                        Location
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Email
                                    </th>
                                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                                        Details
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                {

                                    approvedApplication.map((item, index) => {

                                        return (

                                            <tr class="bg-white border-b">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.company}
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.city}
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    {item.email}
                                                </td>
                                                <td class="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap hover:text-pink-700 cursor-pointer">
                                                    View
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


    )
}

export default Approvedapplication