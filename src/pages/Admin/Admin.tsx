import React from 'react'
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import './Admin.css'

const Admin: React.FC = () => {
  return (
    <div className='admin-main-container'>
      <AdminSidebar />
      <div className='right'>
        <h1>Admin</h1>
      </div>
    </div>
  )
}

export default Admin