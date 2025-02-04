import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  // Map count to a color intensity (you can adjust this mapping as needed)
  const backgroundColor = count > 0 ? `rgba(0, 128, 0, ${Math.min(count * 0.1, 1)})` : "white";

  const styles = useSpring({
    backgroundColor,
    config: { tension: 170, friction: 26 }
  });

  return (
    <animated.div style={{ ...styles, textAlign: "center", padding: "20px", minHeight: "100vh" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </animated.div>
  );
};

export default Counter;
