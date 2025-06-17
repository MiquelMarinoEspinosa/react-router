import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import { UserProvider } from "../context/UserContext";
import Logout from "./Logout";

export default function AppContext() {
  return (
    <div>
      <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider>
    </div>
  );
}
