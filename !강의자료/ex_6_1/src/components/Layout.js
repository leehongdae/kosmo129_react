import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>        
          <li>
            <Link to="/empform">EmpForm</Link>
          </li>                  
          <li>
            <Link to="/empselect">EmpSelect</Link>
          </li>    
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;