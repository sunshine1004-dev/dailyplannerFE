import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import TodoList from "../../components/TodoList/TodoList";
import { useSheet } from "../../contexts/SheetContext";
import { useTodoItemModal } from "../../contexts/TodoItemModalContext";

const TodaysTodoCard = (props) => {
  const [todos, setTodos] = useState([]);
  const {
    sheet,
    handleCreateTodoItem,
    handleUpdateTodoItem,
    handleDeleteTodoItem,
  } = useSheet();
  const { handleOpen } = useTodoItemModal();

  useEffect(() => {
    if (sheet.todos.today.items) {
      setTodos(sheet.todos.today.items);
    }
  }, [sheet.todos.today.items]);

  const launchNewTodoModal = () => {
    handleOpen((text) => {
      handleCreateTodoItem({
        id: sheet.todos.today._id || null,
        text,
        type: "today",
      });
    });
  };

  const launchEditTodoModal = (todoItem) => {
    handleOpen(
      (text) => {
        handleUpdateTodoItem({
          id: sheet.todos.today._id,
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
      id: sheet.todos.today._id,
      todoItemId: todoItem._id,
      text: todoItem.text,
      completed: !todoItem.completed,
    });
  };

  const handleDeleteItem = (id) => {
    handleDeleteTodoItem({
      id: sheet.todos.today._id,
      todoItemId: id,
    });
  };

  return (
    <Card
      title="today's todo"
      sectionName="TODAYS_TODOS"
      rightIcon={true}
      rightIconClickHandler={launchNewTodoModal}
      hideSaveBtn={true}
    >
      <Flex alignItems="center">
        <TodoList
          todos={todos}
          handleItemEdit={launchEditTodoModal}
          toggleCompleted={handleToggleCompleted}
          handleDeleteItem={handleDeleteItem}
        />
      </Flex>
    </Card>
  );
};

TodaysTodoCard.propTypes = {};

export default TodaysTodoCard;
