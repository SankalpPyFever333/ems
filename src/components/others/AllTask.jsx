import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
      const authData = useContext(AuthContext)
      console.log("authData in AllTask: ", authData);
      return (
            <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-45' >
                  <div className='bg-red-500  mb-2 py-2 px-4 flex justify-between rounded ' >
                        <h2 className='w-1/5' >Employee Name</h2>
                        <h2 className='w-1/5' >New Task</h2>
                        <h2 className='w-1/5'>Active Task</h2>
                        <h2 className='w-1/5'>Completed Task</h2>
                        <h2 className='w-1/5'>Failed Task</h2>
                  </div>
                  <div className=' h-[83%] overflow-y-auto' >
                        {
                              authData.empData.map((item, index) => {
                                    return (
                                          <div key={index} className=' border-b-1 border-b-emerald-300 mb-2 mt-3 py-2 px-4 flex justify-between rounded ' >
                                                <h2 className='w-1/5 text-green-400' >{item.firstName}</h2>
                                                <h4 className='w-1/5 text-blue-600' >{item.taskCount.newTask}</h4>
                                                <h4 className='w-1/5 text-yellow-400'>{item.taskCount.active}</h4>
                                                <h4 className='w-1/5 text-white-600'>{item.taskCount.completed}</h4>
                                                <h4 className='w-1/5 text-red-600'>{item.taskCount.failed}</h4>
                                          </div>
                                    )
                              })
                        }
                  </div>


            </div>
      )
}

export default AllTask
