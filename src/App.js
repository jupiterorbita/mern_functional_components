import "./App.css";
// import "./components/PersonCard";
import PersonCard from "./components/PersonCard";
import FuncPersonCard from "./components/FuncComponent";
import Counter from "./components/ClickCountFunc";

function App() {
  return (
    <div className="App">
      <h3>Using Class Components</h3>
      <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"} />
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Grey"} />
      <hr />
      <h3>Using Functional Components</h3>
      <Counter />
      <FuncPersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <FuncPersonCard firstName="John" lastName="Smith" age={88} hairColor="Grey" />
    </div>
  );
}

export default App;
