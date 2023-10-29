import React, { useEffect, useMemo, useState } from 'react'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function InputAddress({
    name,
    validation,
}) {

    const [cityList, setCityList] = useState([]);

    const [currentCityId, setCurrentCityId] = useState()
    const [currentDistrictId, setCurrentDistrictId] = useState()
    const [currentWardId, setCurrentWardId] = useState()

    const getCurrentDistrictList = () => {
        const currentCity = cityList.find((city) => city.Id === currentCityId)

        return currentCity && currentCity.Districts || []

    }
    const getCurrentWardList = () => {
        const currentDistrict = getCurrentDistrictList().find((d) => d.Id === currentDistrictId)

        return currentDistrict && currentDistrict.Wards || []
    }

    // const isValid = useMemo(() => {
    //     if (validation.errors[name] && validation.touched[name]) {
    //         return false;
    //     }

    //     return true;
    // }, [name, validation.errors, validation.touched]);

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
    const onChangeCity = (e) => {
        validation.setFieldValue('city', e.target.value)
        setCurrentCityId(e.target.value)
    }

    const onChangeDistrict = (e) => {
        validation.setFieldValue('district', e.target.value)
        setCurrentDistrictId(e.target.value)

    }

    const onChangeWard = (e) => {
        validation.setFieldValue('ward', e.target.value)
        setCurrentWardId(e.target.value)

    }


    useEffect(() => {
        fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setCityList(data)
            })
    }, [])


    return (
        <div className="mb-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Thành phố / Tỉnh</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select outlined-error-helper-text"
                    label='Thành phố / Tỉnh'
                    variant="outlined"
                    name='city'
                    onChange={onChangeCity}
                >
                    {
                        cityList && cityList.map((city) =>
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
                    onChange={onChangeDistrict}
                >
                    {
                        getCurrentDistrictList() && getCurrentDistrictList().map((district) =>
                            <MenuItem key={district.Id} value={district.Id}>{district.Name}</MenuItem>)
                    }

                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Phường / Xã</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select outlined-error-helper-text"
                    label='Quận / Huyện'
                    variant="outlined"
                    onChange={onChangeWard}

                >
                    {
                        getCurrentWardList().map((ward) =>
                            <MenuItem key={ward.Id} value={ward.Id}>{ward.Name}</MenuItem>)
                    }

                </Select>
            </FormControl>
        </div >
    )
}
