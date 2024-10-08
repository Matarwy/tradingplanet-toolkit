import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";


const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="3" y="3" width="6" height="6" rx="1" />
            <rect x="15" y="15" width="6" height="6" rx="1" />
            <path d="M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3" />
            <path d="M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3" />
        </Svg>
    )
}

export default Icon;