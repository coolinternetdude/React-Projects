import ShoppingItem from "./ShoppingItem";
function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingItem
          key={i.id}
          item={i.item}
          quantity={i.quantity}
          completed={i.completed}
          //   {...i}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
