import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";

import {changeThemeC, ThemeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some', 'rainbow'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themeState.theme);// useSelector
    const dispatch = useDispatch()// useDispatch
    const onChangeCallback = (value: ThemeType) => {
        dispatch(changeThemeC(value))
    }

    //onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12

            </span>
            <SuperSelect options={themes} onChangeOption={onChangeCallback}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
