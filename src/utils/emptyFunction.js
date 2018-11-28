// @flow

const emptyFunction = (e?: any): void | any => {
  if (e && e.preventDefault) e.preventDefault();
};

export default emptyFunction;
