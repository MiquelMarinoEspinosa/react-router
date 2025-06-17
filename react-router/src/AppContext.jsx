import Checkout from "./Checkout";
import Login from "./Login";
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
