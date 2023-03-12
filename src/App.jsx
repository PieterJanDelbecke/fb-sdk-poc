import { useState } from "react";

function App() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    console.log("CLICKED");
    setState((prev) => !prev);
  };

  return (
    <>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click</button>
      {state && <h6>ON</h6>}
    </>
  );
}

export default App;
