import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputGroup from './InputGroup';


const LoginForm = () => {
  const [hover, setHover] = useState(false)
  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

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
        .required('Mật khẩu băt buộc phải có nhé!'),
    }),

    onSubmit: (values) => {
      console.log('««««« values »»»»»', values);
    },
  });

  return (
    <div className='px-5 w-50 mx-auto my-5 '>
      <h1 className='mb-4' style={{ color: '#EE2D7A' }}>Đăng nhập</h1>
      <div className="d-flex flex-column" >
        <div className='mb-4'>
          <InputGroup
            label="Email"
            name="email"
            validation={validation}
<<<<<<< HEAD
            placeholder='Nhập email ở đây'
          // classNamees="invalid"
          // classNamees={isValidEmail() ? "valid" : "invalid"}
=======
>>>>>>> 0a682a06c39ae207b6caa8e7b8657988e369bf70
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
            className='btn-lg border border-0 text-white px-5'
            style={
              hover
                ? { backgroundColor: "#fc629f" }
                : { backgroundColor: "#ee2d7a" }} ee2d7a
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;