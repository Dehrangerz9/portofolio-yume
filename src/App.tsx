import { useState } from "react";
import "./App.css";
import Menu from "./menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
    </>
  );
}

export default App;
