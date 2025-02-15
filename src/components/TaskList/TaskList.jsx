import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = () => {
      const userData = JSON.parse(localStorage.getItem("loggedUserData"))
      console.log("userData in list", userData)
      return (
            <div id='taskList' className='h-[55%] overflow-x-auto w-full  mt-10 flex flex-nowrap p-5 items-center gap-5 justify-start ' >
                  {
                        userData.emp.tasks.map((elem, idx) => {
                              if (elem.active) {
                                    return <AcceptTask data={elem} key={idx} />
                              }
                              if (elem.new_task) {
                                    return <NewTask data={elem} key={idx} />
                              }
                              if (elem.completed) {
                                    return <CompleteTask data={elem} key={idx} />
                              }
                              if (elem.failed) {
                                    return <FailedTask data={elem} key={idx} />
                              }
                        })
                  }

            </div>
      )
}

export default TaskList
