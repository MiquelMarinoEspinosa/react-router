import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Button() {
  const { setUser } = useContext(userContext);
  return <button onClick={() => setUser("Guest")}>Logout</button>;
}
