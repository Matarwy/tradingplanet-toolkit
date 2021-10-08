import React from "react";
import Header from "./index";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {},
};

export const Box: React.FC = () => {
  return (
    <Header />
  );
};