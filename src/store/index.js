import { createStore } from 'redux'
import {exampledata} from './exampledata'
const initialState = {
    count: 3,
    nameChange: "",
    data:exampledata
}
const reducer = (state = initialState, action) => {
    console.log("action", action)
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        case "CHANGENAME":
            return { nameChange: action.text }
        default:
            return state
    }
}
const store = createStore(reducer)
export default store;

