import React, { useState } from "react";
import ModalCard from "./components/modal";
import "./App.css"
import "./components/modal.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="div5">
      <button onClick={() => setIsOpen(true)}>People Birthdays</button>
      <ModalCard isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;