const isTouchDevice = (): boolean => {
  // @ts-ignore
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator?.msMaxTouchPoints > 0;
};

export default isTouchDevice;
