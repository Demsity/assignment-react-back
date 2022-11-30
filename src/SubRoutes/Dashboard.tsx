import React from 'react'
import Breadcrumbs from '../Components/BreadCrumbs'

function Dashboard() {
  return (
    <div>
        <Breadcrumbs page='Admin' />
        <div>Manage Site</div>
        <div>A Statistics dashboard for admin or manager</div>
    </div>
  )
}

export default Dashboard