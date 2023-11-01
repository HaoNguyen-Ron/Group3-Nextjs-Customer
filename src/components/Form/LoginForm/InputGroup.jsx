import { TextField } from '@mui/material';
import React, { memo, useMemo } from 'react';

function InputGroup({
    label,
    type = 'text',
    name,
    placeholder,
    validation,
}) {

    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);

    return (
        <div className="mb-3">

            <TextField fullWidth
                label={label}
                variant="outlined"
                type={type}
                placeholder={placeholder}
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
        </div>
    );
}

export default memo(InputGroup);