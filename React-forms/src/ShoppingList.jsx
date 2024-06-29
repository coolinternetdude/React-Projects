import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";
export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Banana", quantity: 10 },
    { id: uuid(), product: "Carrot", quantity: 4 },
    { id: uuid(), product: "Eggs", quantity: 12 },
  ]);
  const addItem = (product, quantity) => {
    setItems((currItems) => {
      return [...currItems, { id: uuid(), product, quantity }];
    });
  };
  return (
    <div>
      <h1>Shopping List items</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - <b>{i.quantity}</b>
          </li>
        ))}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </div>
  );
}
