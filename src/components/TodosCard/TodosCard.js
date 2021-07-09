import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Input, Flex, Text, VStack, Divider, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Card from "../../components/Card/Card";
import TodoList from "../../components/TodoList/TodoList";
import { useEditMode } from "../../contexts/EditModeContext";
import { useSheet } from "../../contexts/SheetContext";
import { useTodoItemModal } from "../../contexts/TodoItemModalContext";
import { COLOR_THEME } from "../../util/constants";

const TodosCard = ({ type, ...props }) => {
  const { editMode } = useEditMode();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const {
    sheet,
    handleCreateTodoItem,
    handleUpdateTodoItem,
    handleDeleteTodoItem,
    handleUpdateTodoOptions,
  } = useSheet();
  const { handleOpen } = useTodoItemModal();

  useEffect(() => {
    if (sheet.todos[type]) {
      setStartTime(sheet.todos[type].startTime || "");
      setEndTime(sheet.todos[type].endTime || "");
    }
  }, [sheet.todos, type]);

  if (!(sheet && sheet.todos && sheet.todos[type])) return null;

  const { items } = sheet.todos[type];

  const launchNewTodoModal = () => {
    const id = sheet.todos[type] ? sheet.todos[type]._id : null;
    handleOpen((text) => {
      handleCreateTodoItem({
        id,
        text,
        type,
      });
    });
  };

  const launchEditTodoModal = (todoItem) => {
    handleOpen(
      (text) => {
        handleUpdateTodoItem({
          id: sheet.todos[type]._id,
          todoItemId: todoItem._id,
          text,
          completed: todoItem.completed,
        });
      },
      { mode: "EDIT", text: todoItem.text }
    );
  };

  const handleToggleCompleted = (todoItem) => {
    handleUpdateTodoItem({
      id: sheet.todos[type]._id,
      todoItemId: todoItem._id,
      text: todoItem.text,
      completed: !todoItem.completed,
    });
  };

  const handleDeleteItem = (id) => {
    handleDeleteTodoItem({
      id: sheet.todos[type]._id,
      todoItemId: id,
    });
  };

  const handleUpdateOptions = (key, value) => {
    handleUpdateTodoOptions({
      id: sheet.todos[type]._id,
      [key]: value,
    });
  };

  const hasItems = sheet.todos[type]._id && items.length;
  const startTimeVisibility = hasItems && props.startTime;
  const endTimeVisibility =
    startTimeVisibility && sheet.todos[type].startTime && props.endTime;

  return (
    <Card
      title={props.title}
      sectionName={props.sectionName}
      rightIcon={true}
      rightIconClickHandler={launchNewTodoModal}
      hideSaveBtn={true}
    >
      <VStack spacing={editMode ? "4" : ["1", "4"]}>
        <Flex width="100%" alignItems="center">
          <TodoList
            todos={items}
            handleItemEdit={launchEditTodoModal}
            toggleCompleted={handleToggleCompleted}
            handleDeleteItem={handleDeleteItem}
          />
        </Flex>
        {startTimeVisibility && (
          <Divider
            pt="4"
            orientation="horizontal"
            display={editMode ? "inline-flex" : ["none", "inline-flex"]}
          />
        )}
        {startTimeVisibility && (
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
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            {!editMode && (
              <Text
                textTransform="uppercase"
                mr="4"
                fontSize={["xs", "md"]}
                display={["inline-flex", "none"]}
              >
                {sheet.todos[type].startTime}
              </Text>
            )}
            {editMode && (
              <Button
                ml="4"
                width="16"
                display={editMode ? "inline-flex" : ["none", "inline-flex"]}
                backgroundColor={`${COLOR_THEME}.500`}
                onClick={() => handleUpdateOptions("startTime", startTime)}
                disabled={!startTime}
              >
                <CheckIcon color="white" />
              </Button>
            )}
          </Flex>
        )}
        {endTimeVisibility && (
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
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
            {!editMode && (
              <Text
                textTransform="uppercase"
                mr="4"
                fontSize={["xs", "md"]}
                display={["inline-flex", "none"]}
              >
                {sheet.todos[type].endTime}
              </Text>
            )}
            {editMode && (
              <Button
                ml="4"
                width="16"
                display={editMode ? "inline-flex" : ["none", "inline-flex"]}
                backgroundColor={`${COLOR_THEME}.500`}
                onClick={() => handleUpdateOptions("endTime", endTime)}
                disabled={!endTime}
              >
                <CheckIcon color="white" />
              </Button>
            )}
          </Flex>
        )}
      </VStack>
    </Card>
  );
};

TodosCard.propTypes = {
  type: PropTypes.string.isRequired,
  sectionName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startTime: PropTypes.bool,
  startTimeLabel: PropTypes.string,
  endTime: PropTypes.bool,
};

export default TodosCard;
