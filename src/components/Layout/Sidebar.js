import "../../assets/scss/sidebar.scss"
import { Link } from "react-router-dom";
import Search from "../../assets/images/search.svg";
import Export from "../../assets/images/Export.svg"

const Sidebar = () => {
    return (
      <div className="side-menu">   
        <Link className="logo text-white">
            <h4 className="primary-title px-2">HVSS</h4>
        </Link>
        <div className="hvss-menu">
            <Link to="/search" className="logo text-white d-flex align-items-center jusfify-content-start active">
                <img src={Search} className="me-4" alt="Sidebar" />
                <span>Search</span>
            </Link>
            <Link to="/import" className="logo text-white d-flex align-items-center jusfify-content-start">
                <img src={Export} className="me-4" alt="Sidebar" />
                <span>Import</span>
            </Link>
        </div>
      </div>
    );
  };
export default Sidebar;