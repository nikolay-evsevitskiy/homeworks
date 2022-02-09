import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './superRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
        onChange && onChange(e)// onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i} className={s.radLabel}>
            <input
                className={s.radInput}
                type={'radio'}
                onChange={onChangeCallback}
                value={o}
                name={name}
                checked={o === value}// name, checked, value, onChange
            />
            <div className={s.radDesign}></div>
            <div className={s.radText}>{o}</div>
        </label>
    )) : []

    return (
        <div className={s.body}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
