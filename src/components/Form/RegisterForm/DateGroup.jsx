import React, { useMemo } from 'react'

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import styles from './dateGroup.module.css'

export default function DateGroup({
    name,
    validation,
    label
}) {

    const [value, setValue] = React.useState(dayjs('2022-04-17'));

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
                        label="Controlled picker"
                        value={value}
                        onChange={onChangeDoB}
                    />
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