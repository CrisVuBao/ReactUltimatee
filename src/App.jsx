import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";
import reactLogo from "./assets/react.svg";

const App = () => {
  const nameVip = "provip";
  const age = 88;
  const data = {
    address: "Hanoi",
    country: "Vietnam",
  };

  const handleButton = (name) => {
    console.log(name);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew addHandle={handleButton} />
      <TodoData name={nameVip} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo} className="logo" alt="" />
      </div>
    </div>
  );
};

export default App;
