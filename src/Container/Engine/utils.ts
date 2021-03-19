export const isObject = (range: Range) => {
  const {
    // commonAncestorContainer,
    startContainer,
    endContainer,
  } = range;

  if (
    startContainer.nodeType === 3 &&
    startContainer.parentNode?.nodeType === 1 &&
    endContainer.nodeType === 3 && endContainer.parentNode?.nodeType === 1
  ) {
    return true;
  } else {
    return false;
  }
};
