import React from 'react'

const AdminDashboard = () => {
      return (
            <div className='h-screen w-full p-10 ' >
                  <div className=' Header font-medium flex  justify-between items-end' >
                        <h1 className='text-xl' >Hello , <br /> <span className='text-3xl font-semibold ' >Sankalp ☺️</span></h1>
                        <button className='bg-red-600 text-white rounded-2xl p-3 ' >Log out</button>
                  </div>

                  <div className='mt-7 bg-[#1c1c1c] p-5 rounded' >
                        <form className='flex flex-wrap w-full items-start justify-between p-8 ' >
                              <div className='w-1/2' >
                                    <div>
                                          <h3 className='text-sm text-gray-300 mb-0.5 ' >Task Title</h3>
                                          <input className='outline-none px-2 py-1 w-4/5 bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                                    </div>
                                    <div>
                                          <h3 className='text-sm text-gray-300 mb-0.5 '>Date</h3>
                                          <input className='outline-none px-2 py-1 w-4/5 bg-transparent rounded border-[1px] border-gray-400 mb-4' type="date" name="" id="" />
                                    </div>
                                    <div>
                                          <h3 className='text-sm text-gray-300 mb-0.5 ' >Assign to</h3>
                                          <input className='outline-none px-2 py-1 w-4/5 bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' name="" id="" />
                                    </div>

                                    <div>
                                          <h3 className='text-sm text-gray-300 mb-0.5 ' >Category</h3>
                                          <input className='outline-none px-2 py-1 w-4/5  bg-transparent rounded border-[1px] border-gray-400 mb-4' type="text" placeholder='design , dev, etc...' name="" id="" />
                                    </div>
                              </div>
                              <div className='flex flex-col w-2/5 items-start ' >
                                    <h3>Description</h3>
                                    <textarea className='rounded w-full h-44 text-sm py-4 px-2 outline-none bg-transparent border-[1px] border-gray-400 mb-4 ' name="" id="" rows={10} cols={30} ></textarea>
                                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full ' >Create Task</button>

                              </div>
                        </form>

                  </div>

            </div>
      )
}

export default AdminDashboard
