import React from 'react'
import Header from '../others/Header'
import TaskNumberList from '../others/TaskNumberList'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 text-white h-screen'>
    <Header/>
    <TaskNumberList/>
    <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
