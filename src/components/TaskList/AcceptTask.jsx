import React from 'react'

const AcceptTask = ({data}) => {
      console.log(data);
      return (
            <div>
                  <div className='w-[300px] flex-shrink-0 h-full bg-emerald-400 rounded-xl p-5 ' >
                        <div className='flex items-center justify-between ' >
                              <h3 className='text-sm  bg-red-600 text-white rounded-xl font-semibold px-1 py-1 ' >{data.category}</h3>
                              <h4 className='text-sm' >{data.date}</h4>
                        </div>
                        <h2 className='mt-2 text-2xl font-normal' >{data.task_title}</h2>
                        <p className='text-sm mt-2 ' >{data.description}</p>
                        <div className='flex justify-between items-center gap-10 mt-5 ' >
                              <button className='bg-blue-500 text-sm px-1 py-1 rounded-2xl ' >Mark as Completed</button>
                              <button className='bg-red-700 text-sm px-1 py-1 rounded-2xl' >Mark as Failed</button>
                        </div>
                  </div>
            </div>
      )
}

export default AcceptTask
