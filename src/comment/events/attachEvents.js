export const attachEvent = ({ element, event, action }) => {
  element.addEventListener(event, action);
};
