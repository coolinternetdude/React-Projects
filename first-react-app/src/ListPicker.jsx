export default function ListPicker({ values }) {
  const idx = Math.floor(Math.random() * values.length);
  return (
    <div>
      <p>List of values: {values[idx]}</p>
    </div>
  );
}
