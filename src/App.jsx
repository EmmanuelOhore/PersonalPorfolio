import { useState } from "react";
import Hompage from "./pages/Hompage";
import WelcomePage from "./pages/Welcomepage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isloaded, setisloaded] = useState(true);
  return (
    <>
      {isloaded ? (
        <WelcomePage onloadcomplete={setisloaded} />
      ) : (
        <Routes>
          <Route path="/" element={<Hompage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
