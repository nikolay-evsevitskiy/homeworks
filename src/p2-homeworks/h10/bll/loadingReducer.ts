const initState = {
    loading: false
}

export const loadingReducer = (state: InitialStateType = initState, action: ToggleLoadingAC): InitialStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE_LOADING': {
            return {...state, loading: action.value}
        }
        default:
            return state
    }
}

export const loadingAC = (value: boolean) => ({
    type: 'TOGGLE_LOADING',
    value
} as const)// fix any

type InitialStateType = {
    loading: boolean
}

type ToggleLoadingAC = ReturnType<typeof loadingAC>
