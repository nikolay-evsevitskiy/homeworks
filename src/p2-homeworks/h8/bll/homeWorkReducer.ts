import {InitialStateType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | 18
}

export const homeWorkReducer = (state: Array<InitialStateType>, action: ActionType): Array<InitialStateType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = state.map(i => ({...i})).sort((a, b) =>
                a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
            if (action.payload === 'up') {
                return newState
            } else {
                return newState.reverse()
            }// need to fix
        }
        case 'check': {
            return action.payload === 18 ? state.filter(i => i.age >= 18) : state// need to fix
        }
        default:
            return state
    }
}
