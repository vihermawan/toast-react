import React from "react";
import ToastProvider from "./components/ToastProvider";

import "./styles.css";
import Example from "./components/Example";

function App() {
  return (
    <div>
      <ToastProvider>
        <Example />
      </ToastProvider>
    </div>
  );
}

export default App;
