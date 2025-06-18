import useDisplayMessage from "./hooks/useDisplayMessage";

export default function AppHook() {
  const [message, displayMessage] = useDisplayMessage();
  displayMessage();
  return <div>Message is: {message}</div>;
}
