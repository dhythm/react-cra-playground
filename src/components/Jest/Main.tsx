import { JsonData } from "@assets";
import React, { VFC } from "react";

export const Main: VFC = () => {
  const jsonStr = JSON.stringify(JsonData);
  return <div>{jsonStr}</div>;
};
