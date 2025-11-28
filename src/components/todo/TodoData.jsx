const TodoData = (props) => {
  // Props là một biến object {}
  console.log("check:", props);
  const { nameNe, age, data } = props;

  return (
    <div className="todo-data">
      <div>
        Learning React name: {nameNe}, {age}, {data.address}
      </div>
      <div>play game</div>
    </div>
  );
};

export default TodoData;
