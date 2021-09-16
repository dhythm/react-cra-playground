import { forwardRef, memo, useState } from "react";

export const MemoisedBehavior = () => {
  const [key, setKey] = useState(0);
  console.log(key);
  return (
    <>
      <RegularComponent>Regular Component</RegularComponent>
      <hr />
      <MemoisedRegularComponent>
        Memoised Regular Component
      </MemoisedRegularComponent>
      <hr />
      <ForwardRefComponent>ForwardRef Component</ForwardRefComponent>
      <hr />
      <MemoisedForwardRefComponent>
        Memoised ForwardRef Component
      </MemoisedForwardRefComponent>
      <hr />
      <button
        onClick={() => {
          setKey(Math.random() * 1000);
        }}
      >
        reload
      </button>
    </>
  );
};

const RegularComponent = ({ children }: any) => {
  console.log(`render: RegularComponent`);
  return <div>{children}</div>;
};

const MemoisedRegularComponent = memo(({ children }: any) => {
  console.log(`render: MemoisedRegularComponent`);
  return <RegularComponent>{children}</RegularComponent>;
});

const ForwardRefComponent = forwardRef<any, any>(({ children }: any, ref) => {
  console.log(`render: ForwardRefComponent`);
  return <div ref={ref}>{children}</div>;
});

const MemoisedForwardRefComponent = memo(({ children }: any) => {
  console.log(`render: MemoisedForwardRefComponent`);
  return <ForwardRefComponent>{children}</ForwardRefComponent>;
});
