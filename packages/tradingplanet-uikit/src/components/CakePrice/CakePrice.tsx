import React from "react";
import styled from "styled-components";
import { TradingPlanetRoundIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd, color = "textSubtle" }) => {
  return cakePriceUsd ? (
    <PriceLink
      href="/swap?outputCurrency=0x96e738bc52fBcc305E8c4401d05C532Dd4D2F314"
    >
      <TradingPlanetRoundIcon width="24px" mr="8px" />
      {/* <Text color={color} bold>{`$${cakePriceUsd.toFixed(3)}`}</Text> */}
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
