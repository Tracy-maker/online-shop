import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"./addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img src="https://img.icons8.com/?size=60&id=rXfexTqQIs7R&format=png" alt=""/>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
