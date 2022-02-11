const initState: InitStateType = {
    theme: 'dark'
};

export const themeReducer = (state = initState, action: setThemeType): InitStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.value};
        }
        default:
            return state;
    }
};

export const changeThemeC = (value: ThemeType) => ({
    type: 'CHANGE-THEME',
    value
} as const)

type InitStateType = {
    theme: ThemeType
}
export type ThemeType = 'dark' | 'red' | 'some' | 'rainbow'
type setThemeType = ReturnType<typeof changeThemeC>



