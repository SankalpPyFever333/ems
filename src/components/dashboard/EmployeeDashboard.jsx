import React from 'react'
import TaskListCards from './TaskListCards'
import TaskList from '../TaskList/TaskList'
import Headers from '../others/Headers'

const EmployeeDashboard = ({ userData }) => {

      return (
            <>

                  <div className="mainDashboard ">
                        <div className="p-15 flex flex-col h-screen bg-[#1C1C1C] ">
                              <Headers userData={userData} />
                              <TaskListCards userData={userData} />
                              <TaskList userData={userData} />
                        </div>
                              
                  </div>

            </>


      )
}

export default EmployeeDashboard
