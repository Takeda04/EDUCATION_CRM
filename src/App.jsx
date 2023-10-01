import Header from "./components/Header/Header";
import { useStateContext } from "./context/ContextProvider";

function App() {
  // const { setCurrentMode, currentMode } = useStateContext();
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
