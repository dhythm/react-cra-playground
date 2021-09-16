import { forwardRef, memo, useMemo, useState } from "react";

export const MemoisedBehavior = () => {
  return (
    <>
      <Nested />
    </>
  );
};

const Parallel = () => {
  const [, setKey] = useState(0);
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
        reload Parallel Component
      </button>
    </>
  );
};

const Nested = () => {
  const [, setKey] = useState(0);
  const memoised = useMemo(
    () => (
      <MemoisedRegularComponent>
        Memoised Regular Component
      </MemoisedRegularComponent>
    ),
    []
  );
  return (
    <>
      {/* Both ForwardRef and Regular are re-rendered */}
      {/* <ForwardRefComponent>
        <RegularComponent>Regular Component</RegularComponent>
      </ForwardRefComponent>
      <hr /> */}

      {/* ForwardRef is re-rendered but MemoisedRegular in not re-rendered */}
      {/* <ForwardRefComponent>
        <MemoisedRegularComponent>
          Memoised Regular Component
        </MemoisedRegularComponent>
      </ForwardRefComponent>
      <hr /> */}

      {/* Both MemoisedForwardRef and Regular are re-rendered */}
      {/* <MemoisedForwardRefComponent>
        <RegularComponent>Regular Component</RegularComponent>
      </MemoisedForwardRefComponent>
      <hr /> */}

      {/* MemoisedRegular is NOT re-rendered, but fire both MemoisedForwardRef and ForwardRef's console */}
      <MemoisedForwardRefComponent>
        <MemoisedRegularComponent>
          Memoised Regular Component
        </MemoisedRegularComponent>
      </MemoisedForwardRefComponent>

      {/* MemoisedForwardRef is not re-rendered */}
      <MemoisedForwardRefComponent>{memoised}</MemoisedForwardRefComponent>
      <hr />
      <button
        onClick={() => {
          setKey(Math.random() * 1000);
        }}
      >
        reload Nested Component
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
