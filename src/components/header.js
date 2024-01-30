import "../assets/scss/header.scss" 
import { Dropdown } from "react-bootstrap";

const Sidebar = () => {
    return (
      <div className="hvss-header text-end">    
        <Dropdown>
            <Dropdown.Toggle className="transparent-button" id="dropdown-basic">
                John Doe
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Logout</Dropdown.Item> 
            </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };
export default Sidebar;