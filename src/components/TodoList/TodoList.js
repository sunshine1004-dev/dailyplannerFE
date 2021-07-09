import { VStack, Text, Flex } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useEditMode } from "../../contexts/EditModeContext";
import { COLOR_THEME } from "../../util/constants";

function TodoList({
  todos,
  handleDeleteItem,
  handleItemEdit,
  toggleCompleted,
}) {
  const { editMode } = useEditMode();

  return !todos.length ? (
    <Text fontSize={editMode ? "md" : ["xs", "md"]}>No todos yet...</Text>
  ) : (
    <VStack width="100%" spacing={[1, 4]}>
      {todos.map((todo) => (
        <Flex
          key={todo._id}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <CheckIcon
            mr="4"
            color={todo.completed ? `${COLOR_THEME}.500` : "gray.200"}
            fontSize="lg"
            onClick={() => toggleCompleted(todo)}
            cursor="pointer"
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />
          <Text
            flex="1"
            textAlign="left"
            textDecoration={todo.completed ? "line-through" : "none"}
            textDecorationColor={`${COLOR_THEME}.500`}
            onClick={() => toggleCompleted(todo)}
            cursor="pointer"
            fontSize={editMode ? "md" : ["xs", "md"]}
          >
            {todo.text}
          </Text>
          <EditIcon
            onClick={() => handleItemEdit(todo)}
            fontSize="lg"
            cursor="pointer"
            mr="4"
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />
          <DeleteIcon
            onClick={() => handleDeleteItem(todo._id)}
            fontSize="lg"
            color="red.500"
            cursor="pointer"
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />
        </Flex>
      ))}
    </VStack>
  );
}
export default TodoList;
