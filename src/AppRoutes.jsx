import Bills from "./components/Bills/Bills";
import Dashboard from "./components/Dashboard/Dashboard";
import Items from "./components/Items/Items";
import Units from "./components/Units/Units";
import Layout from "./components/layout/Layout";
import Reports from "./components/Reports/Reports";
import Customers from "./components/Customers/Customers";

import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"             element={<Layout/>}>
            <Route path=""          element={<Items/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="items"     element={<Items/>}/>
            <Route path="units"     element={<Units/>}/>
            <Route path="customers" element={<Customers/>}/>
            <Route path="bills"     element={<Bills/>}/>
            <Route path="reports"   element={<Reports/>}/>
        </Route>
    )
)

export default router;