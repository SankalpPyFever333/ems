import React from 'react'

const AcceptTask = () => {
      return (
            <div>
                  <div className='w-[300px] flex-shrink-0 h-full bg-emerald-400 rounded-xl p-5 ' >
                        <div className='flex items-center justify-between ' >
                              <h3 className='text-sm  bg-red-600 text-white rounded-xl font-semibold px-3 py-1 ' >High</h3>
                              <h4 className='text-sm' >20 feb 2024</h4>
                        </div>
                        <h2 className='mt-5 text-2xl font-semibold' >Practice DSA Striver's</h2>
                        <p className='text-sm mt-2 ' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur omnis quo nobis?</p>
                        <div className='flex justify-between items-center gap-10 mt-5 ' >
                              <button className='bg-blue-500 text-sm px-1 py-1 rounded-2xl ' >Mark as Completed</button>
                              <button className='bg-red-700 text-sm px-1 py-1 rounded-2xl' >Mark as Failed</button>
                        </div>
                  </div>
            </div>
      )
}

export default AcceptTask
