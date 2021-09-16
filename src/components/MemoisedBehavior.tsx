import { forwardRef, memo, useMemo, useState } from "react";

export const MemoisedBehavior = () => {
  return (
    <>
      {/* <Parallel /> */}
      {/* <Nested /> */}
      <Layout />
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

const Layout = () => {
  const [, setKey] = useState(0);
  return (
    <>
      {/* All components are re-rendered */}
      {/* <Component header={<Header />} footer={<Footer />}>
        <Child />
      </Component> */}

      {/* All components are NOT re-rendered */}
      {/* <Component header={<MemoisedHeader />} footer={<MemoisedFooter />}>
        <MemoisedChild />
      </Component> */}

      {/* MemoisedForwardRefComponent is re-rendered */}
      {/* <Component header={<MemoisedHeader />} footer={<MemoisedFooter />}>
        <MemoisedForwardRefComponent>
          <MemoisedChild />
        </MemoisedForwardRefComponent>
      </Component> */}
      {/* MemoisedForwardRefComponent is re-rendered */}
      {/* <ComponentWithForwardRef
        header={<MemoisedHeader />}
        footer={<MemoisedFooter />}
      >
        <MemoisedForwardRefComponent>
          <MemoisedChild />
        </MemoisedForwardRefComponent>
      </ComponentWithForwardRef> */}
      {/* MemoisedForwardRefComponent is re-rendered */}
      {/* <Component
        header={
          <MemoisedForwardRefComponent ref={ref}>
            <MemoisedHeader />
          </MemoisedForwardRefComponent>
        }
        footer={<MemoisedFooter />}
      >
        <MemoisedChild />
      </Component> */}

      <Component header={<MemoisedHeader />} footer={<MemoisedFooter />}>
        {/* re-render */}
        {/* <Child /> */}
        {/* <MemoisedForwardRefComponent>
          <MemoisedChild />
        </MemoisedForwardRefComponent> */}
        {/* <Wrapper>
          <MemoisedForwardRef>
            <MemoisedChild />
          </MemoisedForwardRef>
        </Wrapper> */}
        {/* <Wrapper>
          <MemoisedNestedForwardRefChild />
        </Wrapper> */}
        {/* <AmbiguousReRenderComponent>
          <Child />
        </AmbiguousReRenderComponent> */}
        {/* <AmbiguousReRenderComponent>
          <MemoisedChild />
        </AmbiguousReRenderComponent> */}
        {/* <MemoisedWrapper>
          <MemoisedChild />
        </MemoisedWrapper> */}
        {/* <MemoisedWrapper
          header={<MemoisedHeader />}
          children={<MemoisedChild />}
        /> */}
        <MemoisedWrapper header={<MemoisedHeader />} />

        {/* NOT re-render */}
        <MemoisedChild />
        <MemoisedNestedForwardRefChild />
        <MemoisedNestedMemoisedForwardRefChild />
        <ShouldNotReRenderComponent />
      </Component>
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

const MemoisedForwardRef = memo(ForwardRefComponent);
const MemoisedForwardRefComponent = memo(({ children }: any) => {
  console.log(`render: MemoisedForwardRefComponent`);
  return <ForwardRefComponent>{children}</ForwardRefComponent>;
});

const Component = ({ header, footer, children }: any) => {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
};

const ComponentWithForwardRef = forwardRef(
  ({ header, footer, children }: any, ref) => {
    return (
      <>
        {header}
        {children}
        {footer}
      </>
    );
  }
);

const Header = () => {
  console.log("render: Header");
  return <div>Header</div>;
};

const MemoisedHeader = memo(() => {
  console.log("render: MemoisedHeader");
  return <Header />;
});

const Footer = () => {
  console.log("render: Footer");
  return <div>Footer</div>;
};

const MemoisedFooter = memo(() => {
  console.log("render: MemoisedFooter");
  return <Footer />;
});

const Child = () => {
  console.log("render: Child");
  return <div>Child</div>;
};

const MemoisedChild = memo(() => {
  console.log("render: MemoisedChild");
  return <Child />;
});

const Wrapper = ({ children }) => {
  console.log("render: Wrapper");
  return <div>{children}</div>;
};

const MemoisedWrapper = memo(({ header, children }: any) => {
  console.log("render: MemoisedWrapper");
  return (
    <div>
      {header}
      {children}
    </div>
  );
});

const MemoisedNestedMemoisedForwardRefChild = memo(() => {
  console.log("render: MemoisedNestedMemoisedForwardRefChild");
  return (
    <MemoisedForwardRefComponent>
      <Child />
    </MemoisedForwardRefComponent>
  );
});

const MemoisedNestedForwardRefChild = memo(() => {
  console.log("render: MemoisedNestedForwardRefChild");
  return (
    <ForwardRefComponent>
      <Child />
    </ForwardRefComponent>
  );
});

const ShouldNotReRenderComponent = memo(() => {
  console.log("render: ShouldNotReRenderComponent");
  return (
    <Wrapper>
      <ForwardRefComponent>
        <Child />
      </ForwardRefComponent>
    </Wrapper>
  );
});

const AmbiguousReRenderComponent = memo(({ children }: any) => {
  console.log("render: AmbiguousReRenderComponent");
  return (
    // <Wrapper>
    <ForwardRefComponent>{children}</ForwardRefComponent>
    // </Wrapper>
  );
});
