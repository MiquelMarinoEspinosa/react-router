import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Button() {
  const { dispatch } = useContext(userContext);
  return <button onClick={() => dispatch({ type: "logout" })}>Logout</button>;
}
