import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hompage from "./pages/Hompage";
import WelcomePage from "./pages/Welcomepage";
import PorfolioPage from "./pages/PorfolioPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isloaded, setisloaded] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isloaded ? (
          <WelcomePage
            key="welcome"
            onLoadComplete={() => setisloaded(false)}
          />
        ) : (
          <Routes>
            <Route path="/" element={<Hompage />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
