import base from './base';
import {darkColors} from './colors';
import { dark as darkRadio } from "../components/Radio/theme";
import { dark as darkToggle } from "../components/Toggle/theme";
import { dark as darkTooltip } from "../components/Tooltip/theme";

export const dark = {
    ...base,
    radio: darkRadio,
    colors: darkColors,
    toggle: darkToggle,
    tooltip: darkTooltip
}