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
                .date(),
            // .required('Ngày tháng năm sinh bắt buộc nhập nha!'),

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
            <h1 className='text-primary mb-4'>Đăng ký</h1>
            <div className="d-flex flex-column" >
                <div className="d-flex justify-content-around row">
                    <div className='col col-lg-8 mb-4'>
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

                <div className="d-flex justify-content-around row mb-4">
                    <div className='col col-lg-7'>
                        <InputGroup
                            label="Số điện thoại"
                            name="phoneNumber"
                            validation={validation}
                            classNamees="valid"
                        />
                    </div>

                    <div className='col col-lg-5'>
                        <InputGroup
                            label="Ngày sinh"
                            name="birtday"
                            placeholder='DD/MM/YYYY'
                            validation={validation}
                            classNamees="valid"
                        />
                    </div>
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Email"
                        name="email"
                        type='email'
                        validation={validation}
                        classNamees="valid"
                    />
                </div>

                <div className='mb-4'>
                    <InputAddress
                        validation={validation}
                        classNamees="valid"
                    />
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Địa chỉ "
                        type="text"
                        name="street"
                        validation={validation}
                    />
                </div>

                <div className='mb-4'>
                    <InputGroup
                        label="Mật khẩu"
                        type="password"
                        name="password"
                        validation={validation}
                    />
                </div>

                <div >
                    <InputGroup
                        label="Xác nhận lại mật khẩu"
                        type="password"
                        name="confirmPassword"
                        validation={validation}
                    />
                </div>

                <button type='submit' onClick={validation.handleSubmit} className='mx-auto my-3 btn btn-primary btn-lg w-50'>Đăng ký</button>
            </div>
        </div>
    );
};

export default RegisterForm;