import { createContext, useCallback, useContext, useReducer } from "react";

const TodoItemModalContext = createContext();

function todoItemModalReducer(state, action) {
  switch (action.type) {
    case "OPEN_TODO_ITEM_MODAL":
      return {
        isOpen: true,
        text: action.text,
        mode: action.mode,
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
    (callback, options = { mode: "CREATE", text: "" }) => {
      const { mode, text } = options;
      dispatch({ type: "OPEN_TODO_ITEM_MODAL", mode, text, callback });
    },
    [dispatch]
  );
  const handleSubmit = (text) => {
    todoItemModal.callback(text);
    dispatch({ type: "DISMISS_TODO_ITEM_MODAL" });
  };
  return {
    isOpen: todoItemModal.isOpen,
    text: todoItemModal.text,
    mode: todoItemModal.mode,
    handleDismiss,
    handleOpen,
    handleSubmit,
  };
}
