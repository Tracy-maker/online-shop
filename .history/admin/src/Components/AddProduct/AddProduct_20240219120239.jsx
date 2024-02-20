import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div className="add-product">
      <div className="add-product-itemfield">
        <p>Product title</p>
        <input type="text" name="name" placeholder="Type here" />
      </div>
      <div className="add-product-price">
        <div className="add-product-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" placeholder="Type here" />
        </div>
        <div className="add-product-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>
      <div className="add-product-itemfield">
        <p>Product Category</p>
        <select name="category" className="add-product-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kid</option>
        </select>
      </div>
      <div className="add-product-itemfield">
        <label htmlFor="file-input">
          <img
            src="https://img.icons8.com/?size=80&id=uYiHjFyetVvU&format=png"
            className=".add-product-thumbnail-img"
          />
        </label>
        <input type="file" name="image" id="file-input" hidden />
      </div>
      <button className="add-product-btn">ADD</button>
    </div>
  );
};

export default AddProduct;
