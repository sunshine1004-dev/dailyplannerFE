import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { meQueryStr } from "../queries";
import { get } from "../util/api";

const UserContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "RECEIVE_USER":
      return { ...action.user };
    case "RESET_USER":
      return null;
    default:
      return state;
  }
}

export const UserProvider = (props) => {
  const [user, dispatch] = useReducer(userReducer, null);
  const value = { user, dispatch };

  return <UserContext.Provider value={value} {...props} />;
};

export function useUser() {
  const context = useContext(UserContext);
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  if (!context) throw new Error("Please use useUser within UserProvider");

  const receiveUser = useCallback((data) => {
    context.dispatch({ type: "RECEIVE_USER", user: data });
    // eslint-disable-next-line
  }, []);

  const handleCheckForUser = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const data = await get(meQueryStr);
        if (data && data.me) {
          receiveUser(data.me);
        } else {
          localStorage.removeItem("token");
        }
        setAppIsLoaded(true);
      } else {
        setAppIsLoaded(true);
      }
    } catch (e) {
      console.log(e);
    }
  }, [receiveUser]);

  const handleLogout = () => {
    context.dispatch({ type: "RESET_USER" });
    localStorage.removeItem("token");
  };

  return {
    user: context.user,
    receiveUser,
    handleCheckForUser,
    handleLogout,
    appIsLoaded,
  };
}
