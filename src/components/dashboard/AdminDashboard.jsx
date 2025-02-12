import React from 'react'
import CreateTaskPage from '../others/CreateTaskPage'
import Headers from '../others/Headers'
import AllTask from '../others/AllTask'

const AdminDashboard = ({ userData }) => {
      console.log(userData)
      return (
            <div className='h-screen w-full p-10 ' >
                  <Headers userData={userData} />
                  <CreateTaskPage />
                  <AllTask />

            </div>
      )
}

export default AdminDashboard
