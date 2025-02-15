import React from 'react'

const TaskListCards = () => {
      const userData = JSON.parse(localStorage.getItem("loggedUserData"))
      console.log("userData in TaskList", userData);
      return (

            <>
                  <div className="flex mt-12 gap-5 ">
                        <div className='flex flex-col bg-red-500 rounded-2xl w-[45%] p-13 ' >
                              <h1 className='font-semibold text-2xl  ' >{userData.emp.taskCount.active}</h1>
                              <h3 className='font-medium text-1xl ' >Active Task</h3>
                        </div>
                        <div className='flex flex-col bg-blue-500 rounded-2xl w-[45%] p-13' >
                              <h1 className='font-semibold text-2xl  ' >{userData.emp.taskCount.completed}</h1>
                              <h3 className='font-medium text-1xl ' >Completed Task</h3>
                        </div>
                        <div className='flex flex-col bg-emerald-500 rounded-2xl w-[45%] p-13' >
                              <h1 className='font-semibold text-2xl  ' > {userData.emp.taskCount.failed} </h1>
                              <h3 className='font-medium text-1xl ' >Failed Task</h3>
                        </div>
                        <div className='flex flex-col bg-yellow-500 rounded-2xl w-[45%] p-13' >
                              <h1 className='font-semibold text-2xl  ' > {userData.emp.taskCount.newTask} </h1>
                              <h3 className='font-medium text-1xl ' >New Task</h3>
                        </div>
                  </div>

            </>
      )
}

export default TaskListCards
