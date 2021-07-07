import { createContext, useCallback, useContext, useReducer } from "react";

const EditModeContext = createContext();

function editModeReducer(state, action) {
  switch (action.type) {
    case "SET_EDIT_MODE":
      return {
        editMode: true,
        sectionName: action.sectionName,
      };
    case "UNSET_EDIT_MODE":
      return {
        editMode: false,
        sectionName: null,
      };
    default:
      return state;
  }
}

export const EditModeProvider = (props) => {
  const [editMode, dispatch] = useReducer(editModeReducer, { editMode: false });
  const value = { editMode, dispatch };
  return <EditModeContext.Provider value={value} {...props} />;
};

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context)
    throw new Error("Please use useEditMode within EditModeProvider");
  const { editMode, dispatch } = context;
  const handleDismiss = useCallback(() => {
    dispatch({ type: "UNSET_EDIT_MODE" });
  }, [dispatch]);
  const setEditMode = useCallback(
    (sectionName) => {
      if (sectionName) dispatch({ type: "SET_EDIT_MODE", sectionName });
    },
    [dispatch]
  );
  return {
    editMode: editMode.editMode,
    sectionName: editMode.sectionName,
    setEditMode,
    handleDismiss,
  };
}
