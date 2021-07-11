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
import { COLOR_THEME } from "../../util/constants";

const ExpenseModal = (props) => {
  const { isOpen, handleDismiss, handleSubmit } = props;
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (isOpen) setDescription(props.description || "");
  }, [isOpen, props.description]);

  useEffect(() => {
    if (isOpen) setAmount(props.amount || "");
  }, [isOpen, props.amount]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ description, amount });
    setDescription("");
    setAmount("");
  };

  const title = props.id ? "Edit Expense" : "Add New Expense";

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
              value={description}
              placeholder="Desscription"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              variant="flushed"
              type="text"
              value={amount}
              placeholder="Amount as number"
              onChange={(e) => setAmount(e.target.value)}
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
              disabled={
                !(
                  description &&
                  amount &&
                  Number(amount) + 0 === Number(amount)
                )
              }
            >
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ExpenseModal;
