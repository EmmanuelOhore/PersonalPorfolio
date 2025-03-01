import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hompage from "./pages/Hompage";
import WelcomePage from "./pages/Welcomepage";
import { Route, Routes } from "react-router-dom";
import SelectedPorfolio from "./components/porfolio/selectedPorfolio";

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
            <Route path="/select/:id" element={<SelectedPorfolio />} />
          </Routes>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
