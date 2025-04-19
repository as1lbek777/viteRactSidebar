import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="app">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            <motion.div
              className="modal-container"
              initial={{ x: "5vw", opacity: 0, rotate: 0 }}
              animate={{ x: -190, opacity: 1, y: -100, rotate: 0 }}
              exit={{ x: "-5vw", opacity: 0, rotate: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="modal-header">
                <h2>Confirm</h2>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                  <X />
                </button>
              </div>

              <input
                type="text"
                placeholder="Enter your goal"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="modal-input"
              />

              <div className="modal-divider" />

              <div className="modal-buttons">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="cancel-btn"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="expert-btn"
                  onClick={() => setIsOpen(false)}
                >
                  Expert me
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;