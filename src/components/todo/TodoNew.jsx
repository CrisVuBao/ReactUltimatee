const TodoNew = (props) => {
  const { addHandle, handleInput } = props;

  return (
    <div className="todo-add-new">
      <input type="text" onChange={handleInput} />
      <button onClick={addHandle}>Add</button>
    </div>
  );
};

export default TodoNew;
