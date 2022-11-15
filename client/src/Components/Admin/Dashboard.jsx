import React, { useEffect, useState } from 'react'
import axios from '../../Axios'

function Dashboard() {
    const [usercount, setUserCount] = useState(0)
    const [applicationcount, setApplicationCount] = useState(0)
    const [slotcount, setSlotCount] = useState(0)


    useEffect(() => {
        
        axios.get('/admin/totaluser').then((response) => {

            let { data } = response
            setUserCount(data)

        }).catch((err) => {
            console.log(err);
        })


        axios.get('/admin/totalapplication').then((response) => {

            let { data } = response

            setApplicationCount(data)

        }).catch((err) => {

            console.log(err);
        })


        axios.get('/admin/totalslot').then((response) => {

            let { data } = response

            setSlotCount(data)

        }).catch((err) => {

            console.log(err);
        })


    }, [])
    return (

        <div className="container mx-auto mt-12 ">
            <div className="grid grid-cols-1 mx-5 gap-2 mb-6 lg:grid-cols-3  ">

                <div className="w-3/4 px-4 py-5  bg-white rounded-lg shadow-xl">
                    <div className="text-sm text-center font-medium text-gray-500 ">
                        Total users
                    </div>
                    <div className="mt-1 text-3xl font-semibold text-center text-gray-900">
                        {usercount}
                    </div>
                </div>

                <div className="w-3/4 px-4 py-5 bg-white rounded-lg shadow-xl">
                    <div className="text-sm font-medium text-center text-gray-500 ">
                        Total Application
                    </div>
                    <div className="mt-1 text-3xl text-center font-semibold text-gray-900">
                        {applicationcount}
                    </div>
                </div>

                <div className="w-3/4 px-4 py-5 bg-white rounded-lg shadow-xl">
                    <div className="text-sm font-medium text-center text-gray-500 ">
                        Total Slot
                    </div>
                    <div className="mt-1 text-3xl text-center font-semibold text-gray-900">
                        {slotcount}
                    </div>
                </div>




            </div>
        </div>

    )
}

export default Dashboard