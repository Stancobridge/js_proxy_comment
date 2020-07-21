import { addComment } from "./comment/commentActions"
import { getElement } from "./comment/elements/getElement"
import { log } from "./helpers/logger"
import { validateLength } from "./helpers/validator"

export const appEvents = [
  {
    '.btn@click' : function() {
      // get name
      let username = getElement('.username').value;
      let commentBody = getElement('.comment-box').value;

      // validate username
      if(!validateLength(4, 10, username)){
        alert('min for username is 4 and maximum is 10')
      } else if(!validateLength(4, Infinity, commentBody)){
        alert('min for comment body is 4 and maximum is 10')
      } else{

      addComment({
        username, body: commentBody, time: Date.now()
      })
      }
    } 
  }
]