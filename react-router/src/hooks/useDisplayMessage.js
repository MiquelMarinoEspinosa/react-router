import { useState } from "react";

export default function useDisplayMessage() {
  const [message, setMessage] = useState("This is a message");
  function displayMessage() {
    console.log("This is a message from display message");
  }

  return [message, displayMessage];
}
