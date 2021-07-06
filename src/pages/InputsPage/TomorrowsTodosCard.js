import { useState } from "react";
import { Input, Flex, Text, VStack } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import TodoList from "../../components/TodoList/TodoList";
import { useEditMode } from "../../contexts/EditModeContext";

const TomorrowsTodoCard = (props) => {
  const { editMode } = useEditMode();
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
    <Card title="tomorrow morn'n" sectionName="TOMORROWS_TODOS">
      <VStack spacing="4">
        <Flex width="100%" alignItems="center">
          <TodoList
            todos={todos}
            editTodo={handleItemEdit}
            toggleCompleted={toggleCompleted}
          />
        </Flex>
        <Flex width="100%" alignItems="center">
          <Text
            textTransform="uppercase"
            mr="4"
            fontSize={editMode ? "md" : ["xs", "md"]}
          >
            wake up
          </Text>
          <Input
            flex="1"
            variant="flushed"
            placeholder="Flushed"
            type="time"
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />
          {!editMode && (
            <Text
              textTransform="uppercase"
              mr="4"
              fontSize={["xs", "md"]}
              display={["inline-flex", "none"]}
            >
              07:00
            </Text>
          )}
        </Flex>
      </VStack>
    </Card>
  );
};

TomorrowsTodoCard.propTypes = {};

export default TomorrowsTodoCard;
