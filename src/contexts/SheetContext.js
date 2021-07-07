import { createContext, useCallback, useContext, useReducer } from "react";
import { useMutation } from "react-apollo";
import { updateSheetMutation } from "../mutations";
import { sheetQueryStr } from "../queries";
import { get } from "../util/api";

const SheetContext = createContext();

function sheetReducer(state, action) {
  switch (action.type) {
    case "RECEIVE_SHEET":
      return { ...action.sheet };
    case "UPDATE_SHEET":
      return { ...state, ...action.data };
    default:
      return state;
  }
}

export const SheetProvider = (props) => {
  const [sheet, dispatch] = useReducer(sheetReducer, {
    reading: {},
    accountability: {},
  });
  const value = { sheet, dispatch };

  return <SheetContext.Provider value={value} {...props} />;
};

export function useSheet() {
  const context = useContext(SheetContext);
  if (!context) throw new Error("Please use useSheet within SheetProvider");
  const [updateSheet] = useMutation(updateSheetMutation);
  const { sheet, dispatch } = context;

  const handleGetSheet = useCallback(
    async (id) => {
      // run get sheet
      try {
        const data = await get(sheetQueryStr, { id });
        if (data && data.sheet && data.sheet._id) {
          dispatch({ type: "RECEIVE_SHEET", sheet: data.sheet });
        } else {
          window.location.href = "/";
        }
      } catch (e) {
        console.log(e);
      }
    },
    [dispatch]
  );

  const handleUpdateSheet = async (id, data) => {
    try {
      const result = await updateSheet({
        variables: {
          id,
          ...data,
        },
      });
      if (result.data.updateSheet.id) {
        dispatch({ type: "UPDATE_SHEET", data });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return {
    sheet,
    handleGetSheet,
    handleUpdateSheet,
  };
}
