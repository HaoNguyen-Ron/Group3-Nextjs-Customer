import React, { useEffect, useMemo, useState } from 'react'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function InputAddress({
    label,
    name,
    validation,
}) {

    const [country, setCountry] = useState({});

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

    // async function getCountry() {
    //     try {
    //         const response = await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json');
    //         const newCountry = {}
            
    //         response.data.forEach((item, index) => {
    //             newCountry[`key ${index}`] = item
    //         })
    //         setCountry(newCountry)
            
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setCountry(data)

        })
    }, [])
  
    return (
        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
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
                    {
                        // country && <MenuItem key={country.Id} value={country.Id}>{country.Name}</MenuItem>
                        // country.map((item) => {
                        //     <MenuItem key={item.Id} value={item.Id}>{item.Name}</MenuItem>
                        // })
                    }

                </Select>
            </FormControl>
        </div>
    )
}
