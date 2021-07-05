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
  Divider,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

function TodoList({ todos, deleteTodo, editTodo, toggleCompleted }) {
  const [modalValue, setModalValue] = useState({});
  //hook to close the modal when user is done editing:
  const [isOpen, setIsOpen] = useState(false);

  function onClose() {
    setIsOpen(false);
  }

  function handleEditClick(todo) {
    setIsOpen(true);
    // we've set the passed todo to modal value
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
    <VStack width="100%" spacing="4">
      {todos.map((todo) => (
        <Flex width="100%" justifyContent="space-between" alignItems="center">
          <CheckIcon
            mr="4"
            color={todo.completed ? "teal.500" : "gray.200"}
            fontSize="lg"
            onClick={() => toggleCompleted(todo.id)}
            cursor="pointer"
          />
          <Text
            flex="1"
            textAlign="left"
            textDecoration={todo.completed ? "line-through" : "none"}
            textDecorationColor="teal.500"
            onClick={() => toggleCompleted(todo.id)}
            cursor="pointer"
          >
            {todo.text}
          </Text>
          <EditIcon
            onClick={() => handleEditClick(todo)}
            fontSize="lg"
            cursor="pointer"
            mr="4"
          />
          <DeleteIcon
            onClick={() => deleteTodo(todo)}
            fontSize="lg"
            color="red.500"
            cursor="pointer"
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
                  <Button colorScheme="teal" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Button type="submit" colorScheme="teal" mr={3}>
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
