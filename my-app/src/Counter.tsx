import { createSignal } from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);
  const doubleCount = () => count() * 2;
  
  console.log("The body of the function runs once...");

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>
        {doubleCount()}
      </button>
    </>
  );
}