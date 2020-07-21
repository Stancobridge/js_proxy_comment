/**
 * 
 * Every comment displayed in the UI is loaded from here,
 * this is the state of the comment, what is removed here is removed in the UI
 * what is added here is added in the, hence we can say that the UI and this array is in sync
 * with the help of Proxy we will monitor and maintain this sync, meaning that proxy can only update, remove or delete what we have in this array
 */

export const comments = {
  comments : [
  {
    username: 'Stanley',
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nisi perspiciatis eum tempore dolorem quasi quam earum velit dolore facilis? Deserunt porro, consequuntur nihil harum quaerat enim minus a voluptate possimus, cupiditate officiis placeat sapiente recusandae saepe eligendi. Sapiente, numquam!",
    time: Date.now()
  }
]
}