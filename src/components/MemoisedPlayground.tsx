export const MemoisedPlayground = () => {
  return <ComponentA />;
};

const ComponentA = () => {
  console.log("Component A");
  return (
    <>
      <ComponentB1 />
      <ComponentB2 />
    </>
  );
};

const ComponentB1 = () => {
  console.log("Component B1");
  return (
    <>
      <ComponentC1 />
      <ComponentC2 />
    </>
  );
};

const ComponentB2 = () => {
  console.log("Component B2");
  return (
    <>
      <ComponentD1 />
      <ComponentD2 />
    </>
  );
};

const ComponentC1 = () => {
  console.log("Component C1");
  return <></>;
};

const ComponentC2 = () => {
  console.log("Component C2");
  return <></>;
};

const ComponentD1 = () => {
  console.log("Component D1");
  return <></>;
};

const ComponentD2 = () => {
  console.log("Component D2");
  return <></>;
};
