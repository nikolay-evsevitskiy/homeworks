import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
    disabled: boolean

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler, disabled} // деструктуризация пропсов
) => {
    const inputClass = error ? `${s.formInput} + ${s.error}` : s.formInput // need to fix with (?:)
    const errorText = error ? error : ""

    return (
        <div>
            <div className={s.formGroup}>
                <input type={"text"} value={name} placeholder={"Name"} onChange={setNameCallback}
                       onKeyPress={onKeyPressHandler} className={inputClass}/>
                <label className={s.formLabel}>Name</label>
                <span className={s.errorClass}>{errorText}</span>
            </div>
            <div>
                <button className={error ? `${s.buttonStyle} + ${s.disabledButton}` : s.buttonStyle} onClick={addUser}
                        disabled={disabled}>Set
                </button>
            </div>
            <div className={s.totalUserStyle}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
