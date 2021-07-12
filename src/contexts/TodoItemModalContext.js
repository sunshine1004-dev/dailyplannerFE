import { createContext, useCallback, useContext, useReducer } from "react";

const TodoItemModalContext = createContext();

function todoItemModalReducer(state, action) {
  switch (action.type) {
    case "OPEN_TODO_ITEM_MODAL":
      return {
        isOpen: true,
        mode: action.mode,
        todoItem: action.todoItem || { title: "", actions: [] },
        callback: action.callback,
      };
    case "DISMISS_TODO_ITEM_MODAL":
      return {
        isOpen: false,
      };
    default:
      return state;
  }
}

export const TodoItemModalProvider = (props) => {
  const [todoItemModal, dispatch] = useReducer(todoItemModalReducer, {
    todoItemModal: false,
  });
  const value = { todoItemModal, dispatch };
  return <TodoItemModalContext.Provider value={value} {...props} />;
};

export function useTodoItemModal() {
  const context = useContext(TodoItemModalContext);
  if (!context)
    throw new Error("Please use useTodoItemModal within TodoItemModalProvider");
  const { todoItemModal, dispatch } = context;
  const handleDismiss = useCallback(() => {
    dispatch({ type: "DISMISS_TODO_ITEM_MODAL" });
  }, [dispatch]);
  const handleOpen = useCallback(
    (callback, options = { mode: "CREATE" }) => {
      const { mode, todoItem } = options;
      dispatch({ type: "OPEN_TODO_ITEM_MODAL", mode, todoItem, callback });
    },
    [dispatch]
  );
  const handleSubmit = (todoItem) => {
    todoItemModal.callback(todoItem);
    dispatch({ type: "DISMISS_TODO_ITEM_MODAL" });
  };
  return {
    isOpen: todoItemModal.isOpen,
    text: todoItemModal.text,
    mode: todoItemModal.mode,
    todoItem: todoItemModal.todoItem,
    handleDismiss,
    handleOpen,
    handleSubmit,
  };
}
