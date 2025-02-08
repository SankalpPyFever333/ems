import React from 'react'
import TaskListCards from './TaskListCards'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
      return (
            <>

                  <div className="mainDashboard ">
                        <div className="p-15 flex flex-col h-screen bg-[#1C1C1C] ">
                              <div className=' Header font-medium flex  justify-between items-end' >
                                    <h1 className='text-xl' >Hello , <br /> <span className='text-3xl font-semibold ' >Sankalp ☺️</span></h1>
                                    <button className='bg-red-600 text-white rounded-2xl p-3 ' >Log out</button>
                              </div>

                              <TaskListCards />
                              <TaskList />
                        </div>
                  </div>

            </>


      )
}

export default EmployeeDashboard
