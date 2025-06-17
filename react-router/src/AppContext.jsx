import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { UserProvider } from "../context/UserContext";

export default function AppContext() {
  return (
    <div>
      <UserProvider>
        <Login />
        <Checkout />
      </UserProvider>
    </div>
  );
}
