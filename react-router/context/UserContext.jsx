import { createContext, useReducer, useState } from "react";

const userContext = createContext();

function UserProvider({ children }) {
  //   const [user, setUser] = useState("guest");
  function userReducer(state, action) {
    if (action.type == "login") {
      return { user: action.payload };
    }

    if (action.type == "logout") {
      return { user: "Guest" };
    }
  }
  const [state, dispatch] = useReducer(userReducer, { user: null });
  return (
    <userContext.Provider value={{ ...state, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export { UserProvider, userContext };
