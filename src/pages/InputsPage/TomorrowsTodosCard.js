import { useState } from "react";
import PropTypes from "prop-types";
import { Input, Flex, Spacer, Text, VStack } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import TodoList from "../../components/TodoList/TodoList";

const TomorrowsTodoCard = (props) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Study for the diploma", completed: true },
    { id: 2, text: "Feed the dog", completed: true },
    { id: 3, text: "Play video games", completed: false },
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
    <Card title="tomorrow morn'n">
      <VStack spacing="4">
        <Flex width="100%" alignItems="center">
          <TodoList
            todos={todos}
            editTodo={handleItemEdit}
            toggleCompleted={toggleCompleted}
          />
        </Flex>
        <Flex width="100%" alignItems="center">
          <Text textTransform="uppercase" mr="4">
            wake up
          </Text>
          <Input flex="1" variant="flushed" placeholder="Flushed" type="time" />
        </Flex>
      </VStack>
    </Card>
  );
};

TomorrowsTodoCard.propTypes = {};

export default TomorrowsTodoCard;
