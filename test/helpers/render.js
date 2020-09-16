// @flow

export default (html: string) => {
  const document = global.document;

  if (!document) {
    throw new Error('browser environment must be initialized before using render utility.');
  }

  const container = document.createElement('div');

  container.innerHTML = html;

  const queryByTestId = (testId: string) => {
    return container.querySelector(`[data-testid="${testId}"]`);
  };

  // Some tests need to look up global ids with document.getElementById()
  // so we need to be inside an actual document.

  document.body.innerHTML = '';
  document.body.append(container);

  return {
    container,
    queryByTestId,
  };
};
