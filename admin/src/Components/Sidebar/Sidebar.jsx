import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col pt-8 gap-5 w-80 h-screen bg-white">
      <Link to={"./addproduct"} style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-start mx-5 px-4 py-2 rounded-md bg-gray-100 gap-5 cursor-pointer hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=60&id=rXfexTqQIs7R&format=png"
            alt="Add Product Icon"
            className="w-10 h-10"
          />
          <p className="text-lg font-medium">Add Product</p>
        </div>
      </Link>
      <Link to={"./listproduct"} style={{ textDecoration: "none" }}>
        <div className="flex items-center justify-start mx-5 px-4 py-2 rounded-md bg-gray-100 gap-5 cursor-pointer hover:bg-gray-200">
          <img
            src="https://img.icons8.com/?size=48&id=eyfXBlvDyk9g&format=png"
            alt="Product List Icon"
            className="w-10 h-10"
          />
          <p className="text-lg font-medium">Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
