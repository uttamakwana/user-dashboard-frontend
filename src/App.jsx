import { useEffect, useState } from "react";
import "./App.css";
import { Header, Sidebar, Contact } from "./components";
import ContextProvider from "./context/ContextProvider";
import Auth from "./pages/Auth";
import axios from "axios";

function App() {
  // if user is authenticated then let sign in
  const [authUser, setAuthUser] = useState(false);

  useEffect(() => {
    
  }, []);
  return (
    <div className="App">
      <ContextProvider>
        {authUser ? (
          <>
            <Header />
            <Sidebar />
            <Contact />
          </>
        ) : (
          <Auth />
        )}
      </ContextProvider>
    </div>
  );
}

export default App;
