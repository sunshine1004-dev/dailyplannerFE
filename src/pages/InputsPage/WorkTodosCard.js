import { useState } from "react";
import TodosCard from "../../components/TodosCard/TodosCard";

const WorkTodosCard = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Study for the diploma", completed: true },
    { id: 2, text: "Feed the dog", completed: true },
    { id: 3, text: "Play video games", completed: false },
  ]);

  // const handleItemEdit = (...args) => {
  //   console.log({ args });
  // };

  // const toggleCompleted = (id) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => ({
  //       ...todo,
  //       completed: todo.id === id ? !todo.completed : todo.completed,
  //     }))
  //   );
  // };

  return (
    <TodosCard
      title="work/office todo"
      sectionName="WORK_TODOS"
      todos={todos}
      setTodos={setTodos}
      startTime={true}
      endTime={true}
    />
  );
};

WorkTodosCard.propTypes = {};

export default WorkTodosCard;
