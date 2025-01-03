import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import pinkImage from '../Images/light.jpg';


function Login() {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Useeffecttaskone',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        );

        if (response.ok) {
          console.log('Submitted Data:', values);
          navigate('/Register');
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in. Please try again.');
      }
    },
  });
 

  return (
    <div className='formhead'>
    <form className="form1"  
     style={{
          backgroundImage: `url(${pinkImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }} 
        onSubmit={formik.handleSubmit}>
      <h1 className="head1 mt-2">Login Form</h1>

      <label className="label mt-4">Email</label>
      <input
        className="box1"
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && ( 
        <span style={{ color: 'red', fontSize: '13px', paddingLeft: '14px' }}>
          {formik.errors.email}
        </span>
      )}
      <br />

      <label className="label mt-2">Password</label>
      <input
        className="box1"
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
        <span style={{ color: 'red', fontSize: '13px', paddingLeft: '14px' }}>
          {formik.errors.password}
        </span>
      )}
      <br />

      <div className="pass">
        <a className="password" href="">
          Forgot Password?
        </a>
      </div>
      <br />

      <div className="submit">
        <button className="button1 mb-2" type="submit">
          Login
        </button>
      </div>

      <p className="para1">
        Don't have an account?{' '}
        <a className="link" href="#" onClick={() => navigate('/Registerform')}>
          Signup
        </a>
      </p>
    </form>
    </div>
  );
}

export default Login;
