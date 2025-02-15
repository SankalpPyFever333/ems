import React from 'react'

const NewTask = ({ data }) => {
      return (
            <div>
                  <div className='w-[300px] flex-shrink-0 h-full bg-yellow-400 rounded-xl p-5 ' >
                        <div className='flex items-center justify-between ' >
                              <h3 className='text-sm  bg-red-600 text-white rounded-xl font-semibold px-1 py-1 ' >{data.category}</h3>
                              <h4 className='text-sm' >{data.date}</h4>
                        </div>
                        <h2 className='mt-2 text-2xl font-semibold' >{data.task_title}</h2>
                        <p className='text-sm mt-2 ' >{data.description}</p>
                        <div className='mt-5 ' >
                              <button className='bg-emerald-500 px-2 py-2 mt-5 rounded-2xl '  >Accept Task</button>
                        </div>
                  </div>
            </div>
      )
}

export default NewTask
