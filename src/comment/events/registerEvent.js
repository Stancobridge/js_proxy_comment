import {appEvents} from ".././../events"
import { log } from "../../helpers/logger";
import { attachEvent } from "./attachEvents";
import { getElement } from "../elements/getElement";
export const registerEvent = (events = []) => {
  events.forEach(event => {
    // get the first key only in the event Object
    let eventProp = Object.keys(event)[0];

    // get action to perfom this event
    let action = event[eventProp]

    // get the element from the eventProp
    let eventPropSplit = eventProp.split('@')

    // get element selector
    let elementSelector = getElement(eventPropSplit[0])

    // get event
    let elementEvent = eventPropSplit[1]
    
    // attach event to element
    attachEvent({
      event: elementEvent,
      element : elementSelector,
      action
    })
  })
}
