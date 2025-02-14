import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // setLocalStorage();
    const storedUser = JSON.parse(localStorage.getItem('loggedUserData'));
    console.log('storedUser' , storedUser)
    if (storedUser) {
      setLoggedInUser(storedUser);
      const userRole = JSON.parse(localStorage.getItem('loggedUser'));
      setUser(userRole.role)
    }
  }, [])

  const handleLogin = (email, password) => {
    const adminData = authData.adminData.find((e) => email == e.email && password == e.password);
    // console.log("adminData", adminData)
    if (adminData) {
      setUser("admin")
      setLoggedInUser(adminData)
      localStorage.setItem("loggedUser", JSON.stringify({ role: 'admin' }))
      localStorage.setItem("loggedUserData", JSON.stringify({ adminData }))
    }
    else if (authData) {
      const emp = authData.empData.find((e) => email == e.email && password == e.password);
      if (emp) {
        setUser("employee")
        setLoggedInUser(emp);
        localStorage.setItem("loggedUser", JSON.stringify({ role: 'employee' }))
        localStorage.setItem("loggedUserData", JSON.stringify({ emp }))
      }
    }
  }

  return (
    <>
      {!user ? (<Login handleLogin={handleLogin} />) : null}
      {user == "admin" && loggedInUser ? <AdminDashboard userData={loggedInUser} /> : loggedInUser && user == "employee" ? <EmployeeDashboard userData={loggedInUser} /> : null}
    </>
  )
}



export default App
