import React from 'react'

const Headers = ({ userData }) => {
      console.log(userData.firstName)
      return (
            <div>
                  <div className=' Header font-medium flex  justify-between items-end' >
                        <h1 className='text-xl' >Hello , <br /> <span className='text-3xl font-semibold ' >{userData.firstName} ☺️</span></h1>
                        <button className='bg-red-600 text-white rounded-2xl p-3 ' >Log out</button>
                  </div>
            </div>
      )
}

export default Headers
