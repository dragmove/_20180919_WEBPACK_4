export const truthy = obj => {
  return !!obj;
};

export const isDefined = obj => {
  if (obj === null || typeof obj === 'undefined') return false;

  return true;
};
