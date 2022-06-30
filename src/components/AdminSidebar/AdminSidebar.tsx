import React from 'react'
import { Images } from '../../helper/Images'
import './AdminSidebar.css'

const AdminSidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className="business-container">
        <img src={Images.pineDine} alt="Restaurant logo" />
        <p>Pine & Dine</p>
      </div>
      <div>
        <div>
          <p>Dashboard</p>
        </div>
        <div>
          <p>Sales</p>
        </div>
        <div>
          <p>Products</p>
        </div>
        <div>
          <p>Categories</p>
        </div>
        <div>
          <p>Customers</p>
        </div>
        <div>
          <p>Dashboard</p>
        </div>
        <div>
          <p>Reports</p>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar