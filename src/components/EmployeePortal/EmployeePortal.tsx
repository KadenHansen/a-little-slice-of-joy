import React from 'react'
import AdminMenuItems from './AdminMenuItems/AdminMenuItems'
import AdminServices from './AdminServices/AdminServices'

export default function EmployeePortal() {
  return (
    <div className="employee-portal">
      <AdminServices />
      <AdminMenuItems />
    </div>
  )
}
