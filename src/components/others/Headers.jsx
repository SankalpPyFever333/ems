import React from 'react'

const Headers = () => {
      const name = JSON.parse(localStorage.getItem('loggedUserData'));
      const firstName = name?.adminData?.firstName ?? name?.emp?.firstName ?? "User"
      const handleLogOut = () => {
            localStorage.removeItem("loggedUser");
            localStorage.removeItem("loggedUserData");
            window.location.reload();
      }
      return (
            <div>
                  <div className=' Header font-medium flex  justify-between items-end' >
                        <h1 className='text-xl' >Hello , <br /> <span className='text-3xl font-semibold ' >{firstName} ☺️</span></h1>
                        <button onClick={handleLogOut} className='bg-red-600 text-white rounded-2xl p-3 ' >Log out</button>
                  </div>
            </div>
      )
}

export default Headers
