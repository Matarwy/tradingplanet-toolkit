import { error } from "console";
import { Colors } from "./types";

export const baseColors = {
  primary: "#5144fc",
  success: "#25c050",
  warning: "#e29d24",
  failure: '#c92b42',
  gradients: {
    primary: 'linear-gradient(to right bottom, #4779ff, #3d6ef3, #3363e8, #2958dc, #1c4dd1)',
    secondary: 'linear-gradient(to right bottom, #2ece61, #29c75a, #24c153, #1fba4c, #19b445)',
    warnings: 'linear-gradient(to right bottom, #fcb73d, #f2ae33, #e9a627, #df9d1b, #d69509)',
    failure: 'linear-gradient(to right bottom, #e84b62, #e1435a, #db3c52, #d4344a, #cd2b42)',
  }
};

// export const additionalColors = {
//   binance: "#F0B90B",
//   overlay: "#452a7a",
//   gold: "#FFC700",
//   silver: "#B2B2B2",
//   bronze: "#E7974D",
// };

export const additionalColors = {
  ...baseColors,
  background: "#12131c",
  subBackground: "#21232e",
  backgroundDisabled: "#323442",
  backgroundAlt: "#dddedf",
  subBackgroundAlt: "#6b6d7f",
  white: "#fff",
};

export const darkColors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9A6AFF",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  backgroundAlt2: "rgba(39, 38, 44, 0.7)",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAECEF",
  textDisabled: "#666171",
  textSubtle: "#848E9C",
  disabled: "#524B63"
};