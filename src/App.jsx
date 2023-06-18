import "./App.css";
import { Header, Sidebar } from "./components";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Sidebar />
      </ContextProvider>
    </div>
  );
}

export default App;
