import { createContext, useContext, useState } from "react";

const EditModeContext = createContext();

export const EditModeProvider = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [sectionName, setSectionName] = useState();
  const value = { editMode, setEditMode, sectionName, setSectionName };
  return <EditModeContext.Provider value={value} {...props} />;
};

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context)
    throw new Error("Please use useEditMode within EditModeProvider");
  return context;
}
