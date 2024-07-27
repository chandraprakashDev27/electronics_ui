import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
        <Sidebar/>
        <div id="page-content-wrapper">
            <Header/>
            <div className='p-4'>
              <Outlet/>
            </div>
        </div>
    </>
  )
}

export default Layout