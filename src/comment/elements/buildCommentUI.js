import { getElement } from "./getElement";
import { log } from "../../helpers/logger";


const uiBuilder = ({ username, body, date }) => `
<div class="comment-item">
        <div class="comment-thumbnail">
          <img src="./assets/img/user.png">
          <br>
          <strong>
            ${username}
          </strong>
        </div>
        <div class="comment-content">
          <p>
            ${body}
          </p>
        </div>
      </div>

`;

export const buildCommentUI = (commentObj) => {
  let htmlString = uiBuilder(commentObj);
  let doc = document.createElement('div');
  doc.innerHTML = htmlString;

  let commentBody = getElement('.comment-body')
  log(commentBody)
  commentBody.appendChild(doc)
};

