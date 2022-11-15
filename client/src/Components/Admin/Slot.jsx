import React, { useEffect, useState,useReducer } from 'react'

import axios from '../../Axios'

function Slot() {

  const [slots, setSlots] = useState([])
  const [modal, setModal] = useState(false)
  const [application, setApplication] = useState([])
  const [change,setChange] = useState()
  const [slotid,setSlotid]= useState()
  const [value,forceUpdate] = useReducer(x=>x+1,0)

  useEffect(() => {

    axios.get('/admin/slots').then((response) => {

      let { data } = response

      console.log(data);

      setSlots([...data])

    }).catch((err) => {

      console.log(err);

    })

  }, [value])

  const selectSlot = (id) => {

    axios.get('/admin/approvedapplication').then((response) => {

      let { data } = response

      setModal(true)

      setSlotid(id)

      setApplication([...data])

    }).catch((err)=>{

      console.log(err);
    })

  }

const slotBook = ()=>{

  const data = {
    change,
    slotid
  }
  console.log(data);
  axios.patch('admin/slotbook',data).then((response)=>{
      

     alert('Slot Booked')
     forceUpdate()
     setModal(false)


  }).catch((er)=>console.log(er))

}


  return (

    <div className='mt-5 sm:ml-3'>

      <div className='grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-10 mr-12'>

        {
          slots.map((slot, index) => {

            return (

              <div className={`${slot.status?'bg-red-600':'bg-green-600'} rounded-md w-1/2 flex justify-center items-center sm:h-16 lg:h-16 text-slate-200 cursor-pointer`} 
              onClick={ ()=> {  slot.status? alert('Slot Is Booked'): selectSlot(slot._id) } }>{index + 1}</div>
           
              )

          })

        }

      </div>

      {
        modal &&
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">

              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold text-center">
                    Select Company
                  </h3>
                  <button
                    className=" ml-auto bg-red-500 border-0 text-slate-200  float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setModal(false)}
                  >
                    <span className=" text-slate-200  mb-2 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="relative p-6 sm:w-64 lg:w-96 flex justify-center ">
                                     
                   <select name="" id="" onChange={(e)=>setChange(e.target.value)}  >
                     <option value="">Select</option>    
                    {
                      application.map((item)=>{
  
                           
                          return(
   
                            <option className='' value={item.company}>{item.company}</option>

                          )

                      })

                    }

                   </select>
                 
                </div>
                {/*footer*/}

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={slotBook}
                    
                  >
                   Book Slot
                  </button>

                </div>

              

              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      }





    </div>
  )
}

export default Slot