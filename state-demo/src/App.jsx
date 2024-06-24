import "./App.css";
// import EmojiClicker from "./EmojiClicker";
// import Counter from "./Counter";
// import ScoreKeeper from "./ScoreKeeper";
import ScoreKeeperEx from "./ScoreKeeperEx";

function App() {
  return (
    <>
      <h1>State Demo!</h1>
      {/* <Counter /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <ScoreKeeperEx numPlayers={10} target={4} />
    </>
  );
}

export default App;
