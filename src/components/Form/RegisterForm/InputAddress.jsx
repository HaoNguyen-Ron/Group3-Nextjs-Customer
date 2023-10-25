import React, { useMemo } from 'react'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import axiosClient from '@/libraries/axiosClient'

export default function InputAddress({
    label,
    name,
    validation,
    country
}) {

    console.log('««««« country »»»»»', country);

    const [open, setOpen] = React.useState(false);

    const isValid = useMemo(() => {
        if (validation.errors[name] && validation.touched[name]) {
            return false;
        }

        return true;
    }, [name, validation.errors, validation.touched]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };



    return (
        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
            {
                country.map((item) => (
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                        <Select
                            defaultValue=""
                            labelId="demo-simple-select-label"
                            id="demo-simple-select outlined-error-helper-text"
                            value={validation.values[name]}
                            label={label}
                            variant="outlined"
                            name={name}
                            open={open}
                            onBlur={validation.onBlur}
                            onChange={validation.handleChange}
                            className={` ${isValid ? '' : 'is-invalid'}`}
                            onClose={handleClose}
                            onOpen={handleOpen}
                        >
                            <MenuItem value={0}>Nam</MenuItem>
                            <MenuItem value={1}>Nữ</MenuItem>
                            <MenuItem value={2}>Bí mật</MenuItem>
                        </Select>
                    </FormControl>
                ))}
        </div>
    )
}

// getServerSideProps - Server-Side Rendering
export async function getServerSideProps() {
    try {
        const response = await axiosClient.get('/');
        console.log('««««« response »»»»»', response);

        return {
            props: {
                products: response.data.payload,
            },

            // revalidate: 24 * 60 * 60,
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
}