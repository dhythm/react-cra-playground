import { memo, useState } from "react";

export const MemoisedPlayground = () => {
  return (
    <>
      <ComponentA />
    </>
  );
};

const ComponentA = () => {
  const [, setKey] = useState(0);
  console.log("Component A");
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload A</button>
      <ComponentB1 />
      <ComponentB2 />
    </>
  );
};

const ComponentB1 = () => {
  const [, setKey] = useState(0);
  console.log("Component B1");
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload B1</button>
      <ComponentC1 />
      {/* <MemoisedComponentC1 /> */}
      <ComponentC2 />
    </>
  );
};

const ComponentB2 = () => {
  const [, setKey] = useState(0);
  console.log("Component B2");
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload B2</button>
      <ComponentD1 />
      <ComponentD2 />
    </>
  );
};

const ComponentC1 = () => {
  const [, setKey] = useState(0);
  console.log("Component C1");
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload C1</button>
    </>
  );
};

const MemoisedComponentC1 = memo(ComponentC1);

const ComponentC2 = () => {
  const [, setKey] = useState(0);
  console.log("Component C2");
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload C2</button>
    </>
  );
};

const ComponentD1 = () => {
  const [, setKey] = useState(0);
  console.log("Component D1");
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload D1</button>
    </>
  );
};

const ComponentD2 = () => {
  const [, setKey] = useState(0);
  console.log("Component D2");
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload D2</button>
    </>
  );
};
