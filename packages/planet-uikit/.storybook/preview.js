import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
// import light from "../src/theme/light";
import {dark} from "../src/theme";
import {Reset} from "../src/styles/reset";
// import { ModalProvider } from "../src/widgets/Modal";

import { ThemeProvider } from 'styled-components';

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   layout: "fullscreen",
// };

// const themes = [
//   {
//     name: "Light",
//     backgroundColor: light.colors.background,
//     ...light,
//   },
//   {
//     name: "Dark",
//     backgroundColor: dark.background,
//     ...dark,
//   },
// ];


const globalDecorator = (StoryFn) => {
  console.log(dark)
  return (
    <>
    <ThemeProvider theme={dark}>
      <Reset />
      <StoryFn />
    </ThemeProvider>
    </>
  )};



// export default globalDecorator;
export const decorators = [globalDecorator];
