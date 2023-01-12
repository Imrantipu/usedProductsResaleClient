
import { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import { AuthContext } from './../contexts/AuthProvider';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
             <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {(!isSeller && !isAdmin) &&
                            
                               
                                 <li><Link to="/dashboard">My Orders</Link></li>
                               
                            
                        } 
                        {
                             isSeller && 
                                <>
                                    <li><Link to="/dashboard/addproduct">Add a Product</Link></li>
                                    <li><Link to="/dashboard/myproduct">My Products</Link></li>
                                </>
                        }
                        {
                            isAdmin && 
                                <>
                                    <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                                    <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;