import { useState } from "react"
import React from 'react'

const CreateTaskPage = () => {
      const [taskTitle, setTaskTitle] = useState('');
      const [taskDate, setTaskDate] = useState('');
      const [taskAssignTo, setTaskAssignTo] = useState('');
      const [taskCategory, setTaskCategory] = useState('');
      const [taskDescription, setTaskDescription] = useState('');
      const [task, setTask] = useState({});
      const submitHandler = (e) => {
            e.preventDefault();
            const newTask =
            {
                  "task_title": taskTitle,
                  "description": taskDescription,
                  "date": taskDate,
                  "category": taskCategory,
                  "active": true,
                  "new_task": true,
                  "completed": false,
                  "failed": false

            }
            setTask(newTask)

            const empDataFromLS = JSON.parse(localStorage.getItem("employees"))
            console.log(taskAssignTo)
            empDataFromLS.forEach((elem) => {
                  if (elem.firstName == taskAssignTo) {
                        elem.tasks.push(task);
                  }

            })
            localStorage.setItem("employees", JSON.stringify(empDataFromLS))

            console.log(taskTitle, taskDate, taskDescription, taskCategory, taskAssignTo);
            setTaskAssignTo("")
            setTaskCategory("")
            setTaskDate("")
            setTaskTitle("")
            setTaskDescription("")
      }
      return (
            <>
                  <div className='mt-7 bg-[#1c1c1c] p-5 rounded' >
                        <form onSubmit={(e) => {
                              submitHandler(e)
                        }} className='flex flex-wrap w-full items-start justify-between p-8 ' >
                              <div className='w-1/2' >
                                    <div>
                                          <h3 className='text-sm text-gray-300 mb-0.5 ' >Task Title</h3>
                                          <input value={taskTitle} onChange={(e) => {
                                                setTaskTitle(e.target.value)
                                          }} className='outline-none px-2 py-1 w-4/5 bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                                    </div>
                                    <div>
                                          <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
                                          <input value={taskDate} onChange={(e) => {
                                                setTaskDate(e.target.value)
                                          }} className='outline-none px-2 py-1 w-4/5 bg-transparent rounded border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
                                    </div>
                                    <div>
                                          <h3 className='text-sm text-gray-300 mb-0.5 ' >Assign to</h3>
                                          <input value={taskAssignTo} onChange={(e) => {
                                                setTaskAssignTo(e.target.value)
                                          }} className='outline-none px-2 py-1 w-4/5 bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' name="" id="" />
                                    </div>

                                    <div>
                                          <h3 className='text-sm text-gray-300 mb-0.5 ' >Category</h3>
                                          <input value={taskCategory} onChange={(e) => {
                                                setTaskCategory(e.target.value)
                                          }} className='outline-none px-2 py-1 w-4/5  bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder='design , dev, etc...' name="" id="" />
                                    </div>
                              </div>
                              <div className='flex flex-col w-2/5 items-start ' >
                                    <h3>Description</h3>
                                    <textarea value={taskDescription} onChange={(e) => {
                                          setTaskDescription(e.target.value)
                                    }} className='rounded w-full h-44 text-sm py-4 px-2 outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' name="" id="" rows={10} cols={30} ></textarea>
                                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ' >Create Task</button>

                              </div>
                        </form>

                  </div>
            </>
      )
}

export default CreateTaskPage
