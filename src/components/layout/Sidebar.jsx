import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="bg-success border-right" style={{ width: "200px" }} id="sidebar-wrapper">
        <div className="sidebar-heading text-center">
          <img
            src="https://marketplace.canva.com/EAE5jquuha4/1/0/1600w/canva-green-circle-online-store-shopping-basket-logo-QNZXI4gjJZo.jpg"
            style={{ width: "150px", textAlign: "center" }} />
        </div>
        <div className="list-group list-group-flush mt-5">
          <Link to="dashboard"><span className="list-group-item list-group-item-action bg-dark text-white"><i className="fas fa-tachometer-alt"></i> Dashboard</span></Link>
          <Link to="items"><span className="list-group-item list-group-item-action bg-dark text-white"><i className="fas fa-box-open"></i> Items</span></Link>
          <Link to="units"><span className="list-group-item list-group-item-action bg-dark text-white"><i className="fas fa-tags"></i> Units</span></Link>
          <Link to="customers"><span className="list-group-item list-group-item-action bg-dark text-white"><i className="fas fa-users"></i> Customers</span></Link>
          <Link to="bills"><span className="list-group-item list-group-item-action bg-dark text-white"><i className="fas fa-file-invoice"></i> Bils</span></Link>
          <Link to="reports"><span className="list-group-item list-group-item-action bg-dark text-white"><i className="fas fa-chart-line"></i> Reports</span></Link>
        </div>
    </div>
  )
}

export default Sidebar