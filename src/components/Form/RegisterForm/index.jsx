import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputGroup from './InputGroup';
import SelectGroup from './SelectGroup';
import InputAddress from './InputAddress';

const RegisterForm = () => {
    const validation = useFormik({
        initialValues: {
            fullname: '',
            phoneNumber: '',
            email: '',
            city: '',
            district: '',
            ward: '',
            street: '',
            password: '',
            confirmPassword: '',
            gender: ''
        },

        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Email không hợp lệ')
                .required('Vui lòng điền email'),

            phoneNumber: Yup
                .string()
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Số điện thoại sai rồi')
                .required('Số điện thoại cần để liên hệ nhé!'),

            fullname: Yup
                .string()
                .min(2, 'Tên phải ít nhất 2 kí tự')
                .max(50, 'Tên chỉ tối đa 100 kí tự')
                .required('Tên người dùng sẽ bắt buộc nhé!'),

            gender: Yup
                .string(),
            // .required('Vui lòng chọn giới tính nha!'),

            birtday: Yup
                .date()
                .required('Ngày tháng năm sinh bắt buộc nhập nha!'),

            street: Yup
                .string()
                .required('Địa chỉ bắt buộc nhập nha!'),

            password: Yup
                .string()
                .min(6, 'Mật khẩu ít nhất 6 kí tự')
                .max(12, 'Mật khẩu chỉ tối đa 12 kí tự')
                .required('Mật khẩu băt buộc phải có nhé!'),

            confirmPassword: Yup
                .string()
                .oneOf([Yup.ref('password')], "Mật khẩu không trùng")
                .required('Phải nhập lại mật khẩu nhé!'),
        }),

        onSubmit: (values) => {
            console.log('««««« values »»»»»', values);
        },

    });

    return (
        <div className='px-5 w-50 mx-auto my-5'>
            <h1>Đăng ký</h1>
            <div className="d-flex flex-column" >
                <div className="d-flex justify-content-around row">
                    <div className='col col-lg-8'>
                        <InputGroup
                            label="Tên"
                            name="fullname"
                            validation={validation}
                            onChange={validation.handleChange}
                        />
                    </div>

                    <div className='col col-lg-4'>
                        <SelectGroup
                            label="Giới tính"
                            name="gender"
                            validation={validation}
                            onChange={validation.handleChange}

                        />
                    </div>
                </div>

                <div className="d-flex justify-content-around row">
                    <div className='col col-lg-7'>
                        <InputGroup
                            label="Số điện thoại"
                            name="phoneNumber"
                            validation={validation}
                            classes="valid"
                        />
                    </div>

                    <div className='col col-lg-5'>
                        {/* <DateGroup
                            label='Ngày sinh'
                            name="birtday"
                            validation={validation}
                            classes="valid"
                        /> */}
                    </div>
                </div>

                <InputGroup
                    label="Email"
                    name="email"
                    type='email'
                    validation={validation}
                    classes="valid"
                />

                <div>
                    <InputAddress
                        validation={validation}
                        classes="valid"
                    />
                </div>

                <InputGroup
                    label="Địa chỉ "
                    type="text"
                    name="street"
                    validation={validation}
                />

                <InputGroup
                    label="Mật khẩu"
                    type="password"
                    name="password"
                    validation={validation}
                />

                <InputGroup
                    label="Xác nhận lại mật khẩu"
                    type="password"
                    name="confirmPassword"
                    validation={validation}
                />


                <button type='submit' onClick={validation.handleSubmit} style={{ maxWidth: '200px' }} className='mx-auto my-3'>Click to submit</button>
            </div>
        </div>
    );
};

export default RegisterForm;