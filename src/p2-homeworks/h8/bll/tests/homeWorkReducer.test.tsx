import {homeWorkReducer} from '../homeWorkReducer'
import {InitialStateType} from "../../HW8";


let initialState: Array<InitialStateType> // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState: Array<InitialStateType> = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    console.log(newState)

    // expect(...).toBe(...)
    const result = [
        1,
        3,
        4,
        5,
        2,
        0
    ].filter((i, k)=> i === newState[k]._id)
    expect(result.length).toBe(newState.length)
    expect(newState[0].name).toBe('Александр')
    expect(newState.length).toBe(initialState.length)
    expect(newState[newState.length - 1].name).toBe('Кот')
})
test('sort name down', () => {
    const newState: Array<InitialStateType> = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})
    console.log(newState)
    expect(newState[0].name).toBe('Кот')
    expect(newState.length).toBe(initialState.length)
    expect(newState[newState.length - 1].name).toBe('Александр')


})
test('check age 18', () => {
    const newState: Array<InitialStateType> = homeWorkReducer(initialState, {type: 'check', payload: 18})
    console.log(newState)
    expect(newState[0].name).toBe('Александр')
    expect(newState.length).toBe(4)
    expect(newState[newState.length - 1].name).toBe('Ирина')

})
