// @flow

const emptyFunction = (e?: any): any => {
  if (e && e.preventDefault) e.preventDefault();
};

export default emptyFunction;
