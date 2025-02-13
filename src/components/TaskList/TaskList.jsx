import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({ userData }) => {
      console.log(userData)
      return (
            <div id='taskList' className='h-[55%] overflow-x-auto w-full  mt-10 flex flex-nowrap p-5 items-center gap-5 justify-start ' >
                  {
                        userData.tasks.map((elem) => {
                              if (elem.active) {
                                    return <AcceptTask />
                              }
                              if (elem.new_task) {
                                    return <NewTask />
                              }
                              if (elem.completed) {
                                    return <CompleteTask />
                              }
                              if (elem.failed) {
                                    return <FailedTask />
                              }
                        })
                  }

            </div>
      )
}

export default TaskList
