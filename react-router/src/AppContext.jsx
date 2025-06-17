import { createContext, useState } from "react";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

export const userContext = createContext();

export default function AppContext() {
  const [user, setUser] = useState("guest");
  return (
    <div>
      <userContext.Provider value={{ user, setUser }}>
        <Login />
        <Checkout />
      </userContext.Provider>
    </div>
  );
}
