import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserArrayType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserArrayType // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>('') // need to fix any
    const [disabled, setDisabled] = useState<boolean>(false)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setName(e.currentTarget.value) // need to fix
        setDisabled(false)
    }
    const addUser = () => {
        if (name.trim() !== '') {
            alert('Hello ' + name.trim() + '!')
            addUserCallback(name)
            setName('')// need to fix

        } else {
            setError('Name is required')
            setDisabled(true)
        }

    }

    const totalUsers = users.length // need to fix
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addUser()
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPressHandler}
            disabled={disabled}
        />
    )
}

export default GreetingContainer
