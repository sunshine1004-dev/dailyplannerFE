import { useState } from "react";
import { Input, Flex, Text, VStack } from "@chakra-ui/react";
import TodosCard from "../../components/TodosCard/TodosCard";

const ArtTodosCard = (props) => {
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
      title="art/learn todo"
      sectionName="ART_TODOS"
      todos={todos}
      setTodos={setTodos}
      startTime={true}
      endTime={true}
    />
  );
};

ArtTodosCard.propTypes = {};

export default ArtTodosCard;
