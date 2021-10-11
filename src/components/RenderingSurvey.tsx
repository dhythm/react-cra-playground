import { useEffect, useState } from "react";

export const RenderingSurvey = () => {
  const [loading, setLoading] = useState(true);
  const [label, setLabel] = useState("loading...");
  let _label = "loading...";

  const onClick = () => {
    setLoading(true);
    setLabel("reloading...");
    _label = "reloading...";
    console.log(`onClick: ${label}`);
    // if use setTimeout, re-render will happen twice (setLoading/setLabel and setLoading),
    // on the other hand, if doesn't use setTimeout, re-render will happen once.
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.count();
  console.log({ label });
  console.log({ _label });
  if (loading) return <div>{label}</div>;
  return (
    <>
      <div>Hello, World</div>
      <button onClick={onClick}>reload</button>
    </>
  );
};
