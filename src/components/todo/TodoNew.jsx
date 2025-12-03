import { useState } from "react";

const TodoNew = (props) => {
  const { addHandle } = props;

  const [valueInput, setValueInput] = useState([
    { name: "abc", age: 10 },
    { name: "def", age: 20 },
    { name: "ghi", age: 10 },
  ]);

  const handleInput = (event) => {
    console.log(event.target.value);
    setValueInput(event.target.value);
  };

  return (
    <div className="todo-add-new">
      <input type="text" onChange={handleInput} />
      <button
        onClic
        k={() => {
          addHandle(valueInput);
        }}
      >
        Add
      </button>
      <div>{JSON.stringify(valueInput)}</div>
    </div>
  );
};

export default TodoNew;
