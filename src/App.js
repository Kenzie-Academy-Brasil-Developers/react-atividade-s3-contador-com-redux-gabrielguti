import "./App.css";
import Counter from "./components/counter";
import Value from "./components/value";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="oepration">
          <Value />
          <Counter />
        </div>
      </div>
    </div>
  );
}

export default App;
