import LuckyN from "./LuckyN";
import { sum } from "./utils";
function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      {/* <Dice dice={[2, 5]} color="green" />
      <Dice dice={[2, 5]} color="purple" />
      <Dice dice={[2, 5]} color="red" /> */}
      {/* <BoxGrid /> */}
      <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      />
    </>
  );
}

export default App;
