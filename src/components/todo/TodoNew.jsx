const TodoNew = (props) => {
  const { addHandle } = props;

  return (
    <div className="todo-add-new">
      <input type="text" />
      <button onClick={addHandle}>Add</button>
    </div>
  );
};

export default TodoNew;
