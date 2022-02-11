import React, {useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestsAPI} from "../RequestsAPI/RequestsAPI";
import style from './RequestComponent.module.scss'

const RequestComponent = () => {
    const [checked, setChecked] = useState<boolean>(true)
    const [error, setError] = useState<string>()
    const [successResponse, setSuccessResponse] = useState<string>()
    const callBackOfCheckBox = (e: boolean) => {
        setChecked(e)
        console.log(checked)
    }
    const callbackOfButton = () => {
        setError('')
        setSuccessResponse('')
        RequestsAPI.request(checked)
            .then((res) => {
                setSuccessResponse(res.data.errorText)
                console.log({...res})
            })
            .catch((error) => {
                    console.log({...error});
                    console.log(error.response ? setError(error.response.data.errorText) : error.message)

                }
            )

    }
    return (
        <div>
            <div>
                <SuperButton onClick={callbackOfButton}>Request</SuperButton>
                <SuperCheckbox checked={checked} onChangeChecked={callBackOfCheckBox}/>
            </div>
            {error ? <div className={style.error}> {error} </div> : successResponse ?
                <div className={style.success}>{successResponse}</div> : ''}
        </div>
    );
};

export default RequestComponent;
