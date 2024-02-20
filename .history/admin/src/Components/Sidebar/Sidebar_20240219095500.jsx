import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"./addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img
            src="https://img.icons8.com/?size=60&id=rXfexTqQIs7R&format=png"
            alt=""
          />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"./listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <img
            src="https://img.icons8.com/?size=48&id=eyfXBlvDyk9g&format=png"
            alt=""
          />
          <p>Add Product</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
