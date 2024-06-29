import { useState } from "react";
function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const [isProductValid, setIsProductValid] = useState(false);

  const validateProduct = (product) => {
    if (product.length !== 0) {
      setIsProductValid(true);
    } else setIsProductValid(false);
  };
  const handleChange = (evt) => {
    if (evt.target.name === "product") validateProduct(evt.target.value);
    setFormData((currData) => {
      return { ...currData, [evt.target.name]: evt.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData.product, formData.quantity);
    setFormData({ product: "", quantity: 0 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <p style={{ color: "red" }}>Product cannot be empty</p>
      <label htmlFor="product">Product Name : </label>
      <input
        type="text"
        placeholder="product name"
        value={formData.product}
        name="product"
        id="product"
        onChange={handleChange}
      />
      {/* quantity field */}
      <label htmlFor="quantity">Quantity : </label>
      <input
        type="number"
        value={formData.quantity}
        placeholder="1"
        name="quantity"
        id="quantity"
        onChange={handleChange}
      />
      <button disabled={!isProductValid}>Add Item</button>
    </form>
  );
}

export default ShoppingListForm;
