import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminMenuItems from './AdminMenuItems/AdminMenuItems'
import AdminServices from './AdminServices/AdminServices'
import NewAdminUserForm from './NewAdminUserForm'

export default function EmployeePortal() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.currentUser) {
      navigate("/admin")
    }
  })
  return (
    <div className="employee-portal">
      <AdminServices />
      <AdminMenuItems />
      <NewAdminUserForm />
    </div>
  )
}
