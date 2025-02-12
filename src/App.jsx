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
    if (authData) {
      const loggedUser = localStorage.getItem("loggedUser");
      setUser(loggedUser.role);
    }
  }, [authData])

  const handleLogin = (email, password) => {
    const adminData = authData.adminData.find((e) => email == e.email && password == e.password);
    console.log("adminData", adminData)
    if (adminData) {
      setUser("admin")
      setLoggedInUser(adminData)
      localStorage.setItem("loggedUser", JSON.stringify({ role: 'admin' }))
    }
    else if (authData) {
      const emp = authData.empData.find((e) => email == e.email && password == e.password);
      if (emp) {
        setUser("employee")
        setLoggedInUser(emp);
        localStorage.setItem("loggedUser", JSON.stringify({ role: 'employee' }))
      }
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" && loggedInUser ? <AdminDashboard userData={loggedInUser} /> : loggedInUser && user == "employee" ? <EmployeeDashboard userData={loggedInUser} /> : ""}
    </>
  )
}



export default App
