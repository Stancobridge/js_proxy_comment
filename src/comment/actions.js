import { log } from "../helpers/logger";
import { buildCommentUI } from "./elements/buildCommentUI";

/**
 *
 * @param {Object} target
 * @param {string} prop
 * @param {any} value
 *
 * @description - comment is added through proxy, this function runs once user
 *              - tries adding a comment, it is responsible for calling the
 *              - comment html builder
 */
const addCommentProxy = (target, prop, value) => {
  // check the property to set
  if (prop == "comments") buildCommentUI(value);
  return value;
};

const displayCommentProxy = (target, prop) => {
  if (prop == "comments")
    target[prop].forEach((comment) => {
      buildCommentUI(comment);
    });

  return target[prop];
};
export const proxyActions = {
  set: addCommentProxy,

  get: displayCommentProxy,
};
