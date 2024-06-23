export default function Die({ numSides = 6 }) {
  const roll = Math.round(Math.random() * numSides);
  return (
    <p>
      {numSides}-sided die roll {roll}
    </p>
  );
}
