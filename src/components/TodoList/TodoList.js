import {
  Box,
  VStack,
  Text,
  Flex,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useEditMode } from "../../contexts/EditModeContext";
import { COLOR_THEME } from "../../util/constants";

function TodoList({ todos, deleteTodo, editTodo, toggleCompleted }) {
  const [modalValue, setModalValue] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const { editMode } = useEditMode();

  function onClose() {
    setIsOpen(false);
  }

  function handleEditClick(todo) {
    setIsOpen(true);
    setModalValue(todo);
    console.log(todo);
  }

  function handleEditInputChange(e, id) {
    setModalValue({ ...modalValue, text: e.target.value });
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    editTodo(modalValue.id, modalValue);
    setModalValue("");
    setIsOpen(false);
  }

  return !todos.length ? (
    <Badge colorScheme="purple" variant="outline" borderRadius="4" p="4" m="5">
      No todos for Today!!
    </Badge>
  ) : (
    <VStack width="100%" spacing={[1, 4]}>
      {todos.map((todo) => (
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <CheckIcon
            mr="4"
            color={todo.completed ? `${COLOR_THEME}.500` : "gray.200"}
            fontSize="lg"
            onClick={() => toggleCompleted(todo.id)}
            cursor="pointer"
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />
          <Text
            flex="1"
            textAlign="left"
            textDecoration={todo.completed ? "line-through" : "none"}
            textDecorationColor={`${COLOR_THEME}.500`}
            onClick={() => toggleCompleted(todo.id)}
            cursor="pointer"
            fontSize={editMode ? "md" : ["xs", "md"]}
          >
            {todo.text}
          </Text>
          <EditIcon
            onClick={() => handleEditClick(todo)}
            fontSize="lg"
            cursor="pointer"
            mr="4"
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />
          <DeleteIcon
            onClick={() => deleteTodo(todo)}
            fontSize="lg"
            color="red.500"
            cursor="pointer"
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Edit Your Todo</ModalHeader>
              <ModalCloseButton />
              <form onSubmit={handleEditSubmit}>
                <ModalBody>
                  <Input
                    value={modalValue.text}
                    key={modalValue.id}
                    variant="outline"
                    type="text"
                    placeholder="Update your todo..."
                    onChange={handleEditInputChange}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme={COLOR_THEME} mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button type="submit" colorScheme={COLOR_THEME} mr={3}>
                    Update
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </Modal>
        </Flex>
      ))}
    </VStack>
  );
}
export default TodoList;
