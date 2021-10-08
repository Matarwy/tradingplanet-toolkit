import React from "react";
import { PlanetPrice, PlanetPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/PlanetPrice",
  component: PlanetPrice,
};

const Template: React.FC<PlanetPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <PlanetPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});

Default.args = {
  cakePriceUsd: 20.0,
};
