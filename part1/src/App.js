import "./App.css";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};
const App = () => {
  const name = "Jacob";
  const age = 22;
  return (
    <div className="App">
      <Hello name="John" age={30} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
