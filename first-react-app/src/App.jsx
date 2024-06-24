import Die from "./Die";
import "./App.css";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Greeter from "./Greeter";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "tomatoe", quantity: 45, completed: true },
  { id: 3, item: "apple", quantity: 13, completed: true },
  { id: 4, item: "banana", quantity: 6, completed: false },
  { id: 5, item: "carrot", quantity: 18, completed: true },
  { id: 6, item: "onion", quantity: 14, completed: false },
  { id: 7, item: "parsley", quantity: 4, completed: true },
  { id: 8, item: "cucumber", quantity: 10, completed: false },
];

function App() {
  return (
    <div>
      {/* <Toggler /> */}
      <Counter />
      {/* <Form /> */}
      {/* <Clicker message="HI !!" buttonText="Please click me!" />
      <Clicker
        message="Please Stop Clicking me"
        buttonText="Please do not click me!"
      /> */}
      {/* <ShoppingList items={data}></ShoppingList> */}
      {/* <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🥑" val3="🍒" /> */}
      {/* <Heading color="magenta" text="welcome!" />
      <Heading color="teal" text="Blah!" />
      <Heading color="cyan" text="HA!" />
      <ColorList colors={["red", "pink", "purple", "teal"]} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
      {/* <ListPicker values={[1, 5, 6, 8, 9, 11, 17]}></ListPicker>
      <Die numSides={20} />
      <Die />
      <Die />
      <Greeter person="Marwa" from="Hassan" />
      <Greeter person="Sara" from="Chadi" />
      <Greeter person="Asmae" from="Ayoub" /> 
      <Greeter person="Sanae" from="Yassine" /> */}
    </div>
  );
}

export default App;
