import { useEffect, useState } from "react";

export const RenderingSurvey = () => {
  const [loading, setLoading] = useState(true);
  let label = "loading...";

  const onClick = () => {
    setLoading(true);
    label = "reloading...";
    console.log(`onClick: ${label}`);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  console.count();
  console.log(label);
  if (loading) return <div>{label}</div>;
  return (
    <>
      <div>Hello, World</div>
      <button onClick={onClick}>reload</button>
    </>
  );
};
