export default function DoubleDice() {
  const num1 = Math.round(Math.random() * 3);
  const num2 = Math.round(Math.random() * 3);
  const styles = { color: num1 == num2 ? "green" : "red" };
  return (
    <div style={styles}>
      <h1>Double Dice</h1>
      {num1 == num2 && <h3>You win !</h3>}
      <p> First number: {num1} </p>
      <p> Second number: {num2} </p>
    </div>
  );
}
