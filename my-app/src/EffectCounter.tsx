import { createSignal, createEffect } from "solid-js";

export function EffectCounter() {
    const [count, setCount] = createSignal(0);
    const doubleCount = () => count() * 2;

    createEffect(() => {
      console.log(count());
    });
    return (
      <>
        <button onClick={() => setCount(c => c + 1)}>
          {doubleCount()}
        </button>
      </>
    );
  }