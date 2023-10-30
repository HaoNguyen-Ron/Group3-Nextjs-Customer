import React, { useMemo } from 'react'

import { DemoContainer } from '@mui/x-date-pickers/internals';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function DateGroup({
    name,
    validation,
    label
}) {

    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);

    const onChangeDoB = (value) => {
        validation.setFieldValue('birtday', value.$d)
    }

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DatePicker
                        label={label}
                        variant="outlined"
                        name={name}
                        className={` ${isValid ? '' : 'is-invalid'} date-picker`}
                        onChange={onChangeDoB} />
                </DemoContainer>
            </LocalizationProvider>

            {!isValid && (
                <div className="invalid-feedback">
                    {validation.errors[name]}
                </div>
            )}
        </>

    )
}