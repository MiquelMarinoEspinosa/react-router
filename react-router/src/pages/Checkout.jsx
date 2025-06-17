import { useContext } from "react";
import { userContext } from "../AppContext";

export default function Checkout() {
  const { user } = useContext(userContext);
  return <div>Checkout as {user}</div>;
}
