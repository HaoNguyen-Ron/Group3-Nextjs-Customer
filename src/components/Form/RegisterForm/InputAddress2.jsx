import React, { useEffect, useMemo, useState } from 'react'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';


export default function InputAddress2({
    name,
    validation,
}) {

    const [cities, setCities] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
                setCities(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    const handleCityChange = (e) => {
        const cityId = e.target.value;
        if (cityId) {
            const selectedCity = cities.find(city => city.Id === cityId);
            setDistricts(selectedCity.Districts);
        } else {
            setDistricts([]);
            setWards([]);
        }
    };

    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        if (districtId) {
            const selectedDistrict = districts.find(district => district.Id === districtId);
            setWards(selectedDistrict.Wards);
        } else {
            setWards([]);
        }
    };


    return (
        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Thành phố / Tỉnh</InputLabel>
                <Select
                    defaultValue=''
                    labelId="demo-simple-select-label"
                    id="demo-simple-select outlined-error-helper-text"
                    label='Thành phố / Tỉnh'
                    variant="outlined"
                    name='city'
                    onChange={handleCityChange}
                >
                    {
                        cities && cities.map((city) =>
                            <MenuItem key={city.Id} value={city.Id}>{city.Name}</MenuItem>
                        )
             
                    }

                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Quận / Huyện</InputLabel>
                <Select
                    defaultValue=""
                    labelId="demo-simple-select-label"
                    id="demo-simple-select outlined-error-helper-text"
                    label='Quận / Huyện'
                    variant="outlined"
                // onChange={onChangeDistrict}
                >
                    {
                        // getCurrentDistrictList() && getCurrentDistrictList().map((district) =>
                        //     <MenuItem key={district.Id} value={district.Name}>{district.Name}</MenuItem>) 
                    }

                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Phường / Xã</InputLabel>
                <Select
                    defaultValue=""
                    labelId="demo-simple-select-label"
                    id="demo-simple-select outlined-error-helper-text"
                    value={validation.values[name]}
                    label='Quận / Huyện'
                    variant="outlined"
                // onChange={(e) => setCurrentWardId(e.target.setCurrentWard())}

                >
                    {
                        // getCurrentWardList().map((ward) =>
                        //     <MenuItem key={ward.Id} value={ward.Id}>{ward.Name}</MenuItem>)
                    }

                </Select>
            </FormControl>
        </div >
    )
}
