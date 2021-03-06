import {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";

export const MemoisedPlayground = () => {
  return (
    <>
      <HooksInspector />
    </>
  );
};

const useHooks = (): [
  {
    key: string;
  }[],
  Dispatch<
    SetStateAction<
      {
        key: string;
      }[]
    >
  >
] => {
  const [value, setValue] = useState([
    { key: "foo" },
    { key: "bar" },
    { key: "baz" },
  ]);
  return [value, setValue];
};
const HooksInspector = () => {
  const [, setKey] = useState(0);
  const [value] = useHooks();
  const v1 = ["foo", "bar", "baz"];
  const v2 = value;
  const spread = { ...value };
  const memoised = useMemo(() => value.map((v) => v), [value]);
  console.log("HooksInspector");
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload A</button>

      {/* It will re-render */}
      <Memoised name="v1" value={v1} />

      {/* It will NOT re-render */}
      <Memoised name="v2" value={v2} />

      {/* It will NOT re-render */}
      <Memoised name="value" value={value} />

      {/* It will re-render */}
      <Memoised name="spread" value={spread} />

      {/* It will re-render */}
      <Memoised name="map" value={value.map((v) => v)} />

      {/* It will NOT re-render */}
      <Memoised name="memoised" value={memoised} />

      {/* It will re-render */}
      <Memoised name="filter" value={value.filter((_, idx) => idx !== 1)} />

      {/* It will NOT re-render */}
      {value.map((v) => (
        <Memoised name={v.key} value={v} />
      ))}
    </>
  );
};

const Child = (props) => {
  console.log(props.name);
  return <div></div>;
};

const Memoised = memo(Child);

const params1 = { a: "b" };
const ComponentA = () => {
  const [, setKey] = useState(0);
  console.log("Component A");
  const params2 = { a: "b" };
  const [params3] = useState({ a: "b" });
  // NOTE:  the second argument `deps` compare by using Object.is
  //        https://github.com/facebook/react/blob/b0803f255ba639aae5a6bd66d1234d12eb18d972/packages/react-reconciler/src/ReactFiberHooks.new.js#L325
  // const memoisedParams = useMemo(() => params2, []);
  const memoisedParams = useMemo(() => params3, [params3]);
  const onClick = () => console.log("hoge");
  const onClickMemoised = useCallback(() => console.log("hoge"), []);
  const children = useMemo(() => <div>bar</div>, []);
  return (
    <>
      <button onClick={() => setKey(Math.random() * 1000)}>reload A</button>
      <ComponentB1 />
      <ComponentB2 />
      {/* <ComponentE1 params={"hoge"} /> */}
      {/* <MemoisedComponentE1 params={"hoge"} /> */}
      {/* <MemoisedComponentE1 params={{ a: "b" }} /> */}
      {/* <MemoisedComponentE1 params={params1} /> */}
      {/* <MemoisedComponentE1 params={params2} /> */}
      <MemoisedComponentE1 params={memoisedParams} />
      {/* <MemoisedComponentE2 onClick={() => console.log("hoge")} /> */}
      {/* <MemoisedComponentE2 onClick={onClick} /> */}
      {/* <MemoisedComponentE2 onClick={onClickMemoised} /> */}
      {/* <MemoisedComponentF1>bar</MemoisedComponentF1> */}
      {/* <MemoisedComponentF1>
        <div>bar</div>
      </MemoisedComponentF1> */}
      {/* <MemoisedComponentF1>
        <MemoisedChild />
      </MemoisedComponentF1> */}
      {/* <MemoisedComponentF1>{children}</MemoisedComponentF1> */}
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

const ComponentE1 = ({ params }) => {
  console.log("Component E1");
  console.log({ params });
  return <></>;
};

const MemoisedComponentE1 = memo(ComponentE1);

const ComponentE2 = ({ onClick }) => {
  console.log("Component E2");
  return <button onClick={onClick}>click</button>;
};

const MemoisedComponentE2 = memo(ComponentE2);

const ComponentF1 = ({ children }) => {
  console.log("Component F1");
  return <div>{children}</div>;
};

const MemoisedComponentF1 = memo(ComponentF1);

const MemoisedChild = memo(() => <div>bar</div>);
