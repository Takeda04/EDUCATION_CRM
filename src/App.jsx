import { useStateContext } from "./context/ContextProvider";

function App() {
  const { setCurrentMode, currentMode } = useStateContext();
  return (
    <div>
      <h1>Salom</h1>
    </div>
  );
}

export default App;
