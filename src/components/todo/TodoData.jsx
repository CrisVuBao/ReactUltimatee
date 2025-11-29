const TodoData = (props) => {
  // Props là một biến object {}
  console.log("check:", props);
  const { name, age, data } = props;

  return (
    <div className="todo-data">
      <div>
        Learning React name: {name}, {age}, {data.address}
      </div>
      <div>play game</div>
    </div>
  );
};

export default TodoData;
