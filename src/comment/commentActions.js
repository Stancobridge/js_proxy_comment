import { comments } from "./comments"
import { proxyActions } from "./actions"
import { validateLength } from "../helpers/validator";
import { log } from "../helpers/logger";


let commentProxy = new Proxy(comments, proxyActions);
commentProxy.comments

export const addComment = ({username, body, time}) => {
  commentProxy.comments ={
    username,
    body,
    time
  }
}


