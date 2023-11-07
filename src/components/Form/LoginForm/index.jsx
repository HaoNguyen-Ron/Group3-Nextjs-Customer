import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Link from 'next/link';

import InputGroup from './InputGroup';

import styles from '@/styles/form.module.css'
import { useRouter } from 'next/router';
import { axiosClient } from '@/libraries/axiosClient';



const LoginForm = () => {
  const [hover, setHover] = useState(false)
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  const redirect = useRouter();

  const validation = useFormik({
    initialValues: {
      email: '',
      password: '',
    },


    validationSchema: Yup.object({
      email: Yup.string()
        .email('Email không hợp lệ')
        .required('Vui lòng điền email'),

      password: Yup.string()
        .min(6, 'Mật khẩu ít nhất 6 kí tự')
        .max(12, 'Mật khẩu chỉ tối đa 12 kí tự')
        .required('Vui lòng điền mật khẩu'),
    }),

    onSubmit: async (values) => {
      console.log('««««« values »»»»»', values);
      try {
        const res = await axiosClient.post('/auth/login', {
          ...values
        })
      } catch (error) {
        console.log('««««« error »»»»»', error);
      }
    },
  });

  return (
    <div className={`px-5 mx-auto my-5 ${styles.formContainer} `}>
      <h1 className='mb-4' style={{ color: '#EE2D7A' }}>Đăng nhập</h1>

      <div className="d-flex flex-column" >
        <div className='mb-4'>
          <InputGroup
            label="Email"
            name="email"
            validation={validation}
            placeholder='Nhập email ở đây'
          />
        </div>

        <div>
          <InputGroup
            label="Password"
            type="password"
            name="password"
            validation={validation}
            placeholder='Nhập mật khẩu ở đây'
          />
        </div>
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='mx-auto my-3'>
          <button
            type='submit'
            onClick={validation.handleSubmit}
            className='btn btn-lg border border-0 text-white px-5'
            style={
              hover
                ? { backgroundColor: "#fc629f" }
                : { backgroundColor: "#ee2d7a" }}
          >
            Đăng nhập
          </button>
        </div>
      </div>

      <div className='d-flex justify-content-between mt-3 flex-column flex-md-row'>
        <div className="registerLink">
          <p>Bạn là người lần đầu đến ?</p>
          <Link href='/register'>
            <em className={styles.form__item} >Bấm vào đây để lập tài khoản nè !</em>
          </Link>
        </div>

        <div className="ResetPassLink mt-4 mt-md-0">
          <p>Quên mật khẩu ?</p>
          <Link href='/register'>
            <em className={styles.form__item} >Tìm lại mật khẩu</em>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;