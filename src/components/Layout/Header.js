import "../../assets/scss/header.scss" 
import AuthUser from "../Pages/Services/AuthUser"

import { Dropdown } from "react-bootstrap";

const Header = () => {
  const { logout } = AuthUser();
  const handleLogout = () => {
    // Call the logout function when the "Logout" option is clicked
    logout();
  };
    return (
      <div className="hvss-header text-end">    
        <Dropdown>
            <Dropdown.Toggle className="transparent-button" id="dropdown-basic">
                John Doe
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {/* <Dropdown.Item href="#/action-1" onClick={handleLogout}>Logout</Dropdown.Item>  */}
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };
export default Header;