import { useEffect, useState } from "react";
import {
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
import { useTodoItemModal } from "../../contexts/TodoItemModalContext";
import { COLOR_THEME } from "../../util/constants";

const TodoItemModal = (props) => {
  const {
    isOpen,
    mode,
    text: todoText,
    handleDismiss,
    handleSubmit,
  } = useTodoItemModal();
  const [text, setText] = useState("");

  useEffect(() => {
    setText(todoText);
  }, [todoText]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(text);
    setText("");
  };

  const title = mode === "EDIT" ? "Edit Todo" : "Add New Todo";

  return (
    <Modal isOpen={isOpen} onClose={handleDismiss} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={onSubmit}>
          <ModalBody>
            <Input
              variant="flushed"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={COLOR_THEME} mr={3} onClick={handleDismiss}>
              Close
            </Button>
            <Button
              type="submit"
              colorScheme={COLOR_THEME}
              mr={3}
              disabled={!text}
            >
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default TodoItemModal;
