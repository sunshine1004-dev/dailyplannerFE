import PropTypes from "prop-types";
import { Input, Flex, Text, VStack } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import TodoList from "../../components/TodoList/TodoList";
import { useEditMode } from "../../contexts/EditModeContext";

const TodosCard = (props) => {
  const { editMode } = useEditMode();

  const handleItemEdit = (...args) => {
    console.log({ args });
  };

  const toggleCompleted = (id) => {
    props.setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      }))
    );
  };

  return (
    <Card title={props.title} sectionName={props.sectionName}>
      <VStack spacing="4">
        <Flex width="100%" alignItems="center">
          <TodoList
            todos={props.todos}
            editTodo={handleItemEdit}
            toggleCompleted={toggleCompleted}
          />
        </Flex>
        {props.startTime && (
          <Flex width="100%" alignItems="center">
            <Text
              textTransform="uppercase"
              mr="4"
              fontSize={editMode ? "md" : ["xs", "md"]}
            >
              {props.startTimeLabel || "start time"}
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
        )}
        {props.endTime && (
          <Flex width="100%" alignItems="center">
            <Text
              textTransform="uppercase"
              mr="4"
              fontSize={editMode ? "md" : ["xs", "md"]}
            >
              end time
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
        )}
      </VStack>
    </Card>
  );
};

TodosCard.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  sectionName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startTime: PropTypes.bool,
  startTimeLabel: PropTypes.string,
  endTime: PropTypes.bool,
};

export default TodosCard;
