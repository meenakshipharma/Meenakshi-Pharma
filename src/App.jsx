import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mt-8 p-4 bg-purple-100  border border-purple-300  max-w-md mx-auto">
        <p className="text-red-800 font-light text-sm">
          Tailwind CSS v4 is successfully configured! 🎉
        </p>
      </div>
    </>
  );
}

export default App;
