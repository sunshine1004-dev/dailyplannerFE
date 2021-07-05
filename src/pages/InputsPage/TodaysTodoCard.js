import { useState } from "react";
import PropTypes from "prop-types";
import { Flex, Input } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import TodoList from "../../components/TodoList/TodoList";

const TodaysTodoCard = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Study for the diploma", completed: true },
    { id: 2, text: "Feed the dog", completed: true },
    { id: 3, text: "Play video games", completed: false },
    { id: 4, text: "Take a walk", completed: false },
  ]);

  const handleItemEdit = (...args) => {
    console.log({ args });
  };

  const toggleCompleted = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      }))
    );
  };

  return (
    <Card title="today's todo">
      <Flex alignItems="center">
        <TodoList
          todos={todos}
          editTodo={handleItemEdit}
          toggleCompleted={toggleCompleted}
        />
      </Flex>
    </Card>
  );
};

TodaysTodoCard.propTypes = {};

export default TodaysTodoCard;
