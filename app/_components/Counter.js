"use client";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((cur) => cur + 1)}>{count}</button>;
}
