import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// import Image from '../Images/light.jpg';

function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false); 

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
    <div className="formhead">
      <form
        className="form1"
        // style={{
        //   backgroundImage: `url(${Image})`,
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundPosition: 'center',
        // }}
        onSubmit={formik.handleSubmit}
      >
        <h1 className="head1 mt-2">Login</h1>
        <p className="head1 mt-2 text-dark " style={{fontSize:'13px',fontWeight:'500'}}>Hello Again!</p>


         
          <label className="label mt-1" >Email</label>
        <input
          className="box1"
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='off'

        />
        {formik.touched.email && formik.errors.email && (
          <span style={{ color: 'red', fontSize: '13px', paddingLeft: '14px' }}>
            {formik.errors.email}
          </span>
        )}
        <br />

        <label className="label mt-2">Password</label>
        <div style={{ position: 'relative' }}>
          <input
            className="box1"
            type={passwordVisible ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span
            onClick={() => setPasswordVisible(!passwordVisible)} 
            style={{
              position: 'absolute',
              right: '25px',
              top: '55%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              fontSize: '16px',
             
            }}
          >
            {passwordVisible ? (
              <i className="fas fa-eye" style={{color:' rgb(235, 32, 59)'}}></i>
            ) : (
              <i className="fas fa-eye-slash" style={{color:' rgb(235, 32, 59)'}}></i>
            )}
          </span>
        </div>
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
          <a className="link" href="#" onClick={() => navigate('/Register')} style={{color:' rgb(235, 32, 59)'}}>
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;


import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import images from '../Images/register.jpg';

function Registerform() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 
  const rowData = location.state?.rowData; 

  const initialValues = {
    firstname: rowData?.firstname || '',
    lastname: rowData?.lastname || '',
    email: rowData?.email || '',
    mobile: rowData?.mobile || '',
    password: rowData?.password || '',
    confirmPassword: rowData?.confirmPassword || '',
    acceptTerms: false,
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
      .required('Confirm Password is required'),
    acceptTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const method = rowData ? 'PUT' : 'POST'; // Use PUT for editing, POST for new
      const url = rowData
        ? `https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Register/${rowData.id}`
        : 'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/Register';

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // alert(rowData ? 'Update successful!' : 'Registration successful!');
        resetForm();
        navigate('/Datastorage');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
  
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {() => (
        <div style={{ display: 'flex', padding: '20px 19rem' }}>
          <img
            className="image"
            src={images}
            style={{
              width: '370px',
              borderRadius: '5px',
              boxShadow:
                'rgba(60, 66, 87, 0.12) 0px 0px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px',
            }}
          />
          <Form className="form2" style={{ width: '400px' }} >
            <h1 className="head1">{rowData ? 'Edit Form' : 'Register Form'}</h1>
            <div style={{ display: 'flex' }}>
              <div className="label1 mt-3" style={{ width: '100%' }}>
                <label>Firstname</label>
                <Field className="box2" name="firstname" placeholder="Firstname"  style={{ width: '96%' }}/>
                <ErrorMessage name="firstname" component="span" className="error" />
              </div>
              <div className="label1 mt-3" style={{ width: '100%' }}>
                <label>Lastname</label>
                <Field className="box2" name="lastname"  autoComplete="off" placeholder="Lastname"  style={{ width: '100%' }} />
                <ErrorMessage name="lastname" component="span" className="error" />
              </div>
            </div>
            <div className="label2" style={{ width: '100%' }}>
              <label>Email</label>
              <Field className="box3" name="email" placeholder="Email" style={{ width: '100%' }} />
              <ErrorMessage name="email" component="span" className="error" />
            </div>
            <div className="label2" style={{ width: '100%' }}>
              <label>Mobile Number</label>
              <Field className="box3" name="mobile"  type="text" placeholder="Mobile Number" style={{ width: '100%' }} />
              <ErrorMessage name="mobile" component="span" className="error" />
            </div>
            <div className="label1" style={{ width: '100%' }}>
              <label>Password</label>
              <div style={{ display: 'flex', position: 'relative' }}>
                <Field
                  className="box2"
                  name="password"
                  type={passwordVisible ? 'text' : 'password'}
                  style={{ width: '100%' }}
                  placeholder="Password"
            
                />
                <span
                  className="eye-icon"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '4px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    color: 'gray',
                  }}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <i className="fas fa-eye" style={{color:' rgb(235, 32, 59)'}}></i>
                  ) : (
                    <i className="fas fa-eye-slash" style={{color:' rgb(235, 32, 59)'}}></i>
                  )}
                </span>
              </div>
              <ErrorMessage name="password" component="span" className="error" />
            </div>
            <div className="label1" style={{ width: '100%' }}>
              <label>Confirm Password</label>
              <div style={{ display: 'flex', position: 'relative' }}>
                <Field
                  className="box2"
                  name="confirmPassword"
                  placeholder="Comfirm Password"
                  type={confirmPasswordVisible ? 'text' : 'password'}
                  style={{ width: '100%' }}

                />
                <span
                  className="eye-icon"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '4px',
                    cursor: 'pointer',
                    fontSize: '15px',
                    color: 'gray',
                  }}
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  {confirmPasswordVisible ? (
                    <i className="fas fa-eye" style={{color:' rgb(235, 32, 59)'}}></i>
                  ) : (
                    <i className="fas fa-eye-slash" style={{color:' rgb(235, 32, 59)'}}></i>
                  )}
                </span>
              </div>
              <ErrorMessage name="confirmPassword" component="span" className="error" />
            </div>
            <div style={{ margin: '15px 0' }}>
              <label>
                <Field
                  type="checkbox"
                  name="acceptTerms"
                  style={{ marginRight: '10px' }}
                />
                I accept the terms and conditions
              </label>
              <ErrorMessage
                name="acceptTerms"
                component="span"
                className="error"
                style={{ color: 'red', display: 'block', marginTop: '5px' }}
              />
            </div>
            <button className="button2" type="submit" style={{ width: '100%' }}>
              {rowData ? 'Update' : 'Register'}
            </button>
            <p className="para2">
              Already have an Account?
              <a
                href=""
                onClick={() => navigate('/FormTask')}
                className="link"
                 style={{color:' rgb(235, 32, 59)'}}
              >
                Login
              </a>
            </p>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Registerform;
