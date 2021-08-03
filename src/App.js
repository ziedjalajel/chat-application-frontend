//component
import { useSelector } from "react-redux";
import Routes from "./components/Routes";
import BeatLoader from "react-spinners/BeatLoader";
import "./App.css";

function App() {
  const loadingChats = useSelector((state) => state.chatReducer.loading);
  const loadingMessages = useSelector((state) => state.messageReducer.loading);

  return (
    <>
      {loadingChats || loadingMessages ? <BeatLoader size={10} /> : <Routes />}
    </>
  );
}

export default App;
