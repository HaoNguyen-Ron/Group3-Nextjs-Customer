import React, { useEffect, useMemo, useState } from 'react'

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function InputAddress({
    name,
    validation,
}) {

    const [cityList, setCityList] = useState();

    const [currentCityName, setCurrentCityName] = useState()
    const [currentDistrictName, setCurrentDistrictName] = useState([])
    const [currentWardId, setCurrentWardId] = useState()

    const getCurrentDistrictList = () => {
        const  currentCity = cityList.find((city) => city.Name === currentCityName)

        console.log('««««« currentCity »»»»»', currentCity);
        return currentCity && setCurrentDistrictName(currentCity.Distrists)
    }
    
    // const getCurrentWardList = () => {
    //     const currentDistrict = getCurrentDistrictList()

    //     return currentDistrict && currentDistrict.Wards.find((ward) => ward.Name === currentWardId) || []
    // }

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
        setCurrentCityName(e.target.value)
    }

    // const onChangeDistrict = (e) => {
    //     console.log('««««« e.target »»»»»', e.target);
    //     setCurrentDistrictName(e.target.getCurrentDistrictList)
    // }

    

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
                    defaultValue=''
                    labelId="demo-simple-select-label"
                    id="demo-simple-select outlined-error-helper-text"
                    label='Thành phố / Tỉnh'
                    variant="outlined"
                    name='city'
                    onChange={onChangeCity}
                >
                    {
                        cityList && cityList.map((city) =>
                            <MenuItem key={city.Id} value={city.Name}>{city.Name}</MenuItem>
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
