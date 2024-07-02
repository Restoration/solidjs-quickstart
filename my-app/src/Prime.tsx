import { Accessor, createMemo, createSignal } from "solid-js";

const isPrime = (num: number) => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const calculatePrimeSum = (limit: number) => {
  let sum = 0;
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
};

const PrimeSumComponent = ({ limit }: { limit: Accessor<number> }) => {
  const primeSum = createMemo(() => calculatePrimeSum(limit()), [limit]);

  return (
    <div>
      <h2>
        Sum of primes up to {limit()}: {primeSum()}
      </h2>
    </div>
  );
};

export const Prime = () => {
  const [limit, setLimit] = createSignal<number>(100);

  return (
    <div>
      <PrimeSumComponent limit={limit} />
      <input
        type="number"
        value={String(limit)}
        onChange={(e) => setLimit(Number(e.target.value))}
      />
    </div>
  );
};
