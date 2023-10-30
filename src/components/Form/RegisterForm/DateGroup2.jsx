import * as React from 'react';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';

export default function DatePickerValue(
    {
        name,
        validation,
        label
    }
) {
    const isValid = React.useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);

    return (
        <>
            <TextField fullWidth
                variant="outlined"
                label={label}
                placeholder='DD/MM/YYYY'
                name={name}
                value={validation.values[name]}
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                className={` ${isValid ? '' : 'is-invalid'}`}
            />

            {!isValid && (
                <div className="invalid-feedback">
                    {validation.errors[name]}
                </div>
            )}
        </>
    );
}