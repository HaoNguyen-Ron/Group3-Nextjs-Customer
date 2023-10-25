import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import InputGroup from './InputGroup';


const LoginForm = () => {
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
    <div className='px-5 w-50 mx-auto my-5'>
      <h1>Đăng nhập</h1>
      <div className="d-flex flex-column" >
        <div className='mb-4'>
          <InputGroup
            label="Email"
            name="email"
            validation={validation}
            placeholder='Nhập email ở đây'
          // classes="invalid"
          // classes={isValidEmail() ? "valid" : "invalid"}
          />
        </div>

        {/* {isValidEmail && <p className="text-danger">{validation.errors.email}</p>} */}
        <div>
          <InputGroup
            label="Password"
            type="password"
            name="password"
            validation={validation}
            placeholder='Nhập mật khẩu ở đây'
          />
        </div>

        <button type='submit' onClick={validation.handleSubmit} style={{ maxWidth: '200px' }} className='mx-auto my-3'>Click to submit</button>
      </div>
    </div>
  );
};

export default LoginForm;