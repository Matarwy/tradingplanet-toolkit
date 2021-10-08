import { scales, variants } from "./types";

/*

    padding: 25px 30px;
    font-size: 14px;
    border-radius: 4px;

*/
export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
    // minWidth: 220,
  },
  [scales.SM]: {
    height: "32px",
    padding: "25px 30px",
    fontSize: 14,
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    background: theme => theme.colors.gradients.primary,
    color: "white",
    borderRadius: 4,
    fontWeight: 500,
    '&:hover': {
      color: '#ffffffe6'
    },
    '&:active': {
      background: 'linear-gradient(to right top, #3060e2, #2b5bde, #2756da, #2252d5, #1c4dd1)',
    }
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
    padding: '0 5px'
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
};
