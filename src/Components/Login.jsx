
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// function Login() {
//   const [form, setForm] = useState({ Username: '', Password: '' });
//   const [errors, setErrors] = useState({ Username: '', Password: '' });

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let validationErrors = {};
//     if (form.Username === '') validationErrors.Username = 'Username is Required';
//     if (form.Password === '') validationErrors.Password = ' Password is Required';

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors); 
//       return;
//     }

//     try {
//       const response = await fetch(
//         'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/LoginForm',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(form),
//         }
//       );

//       if (response.ok) {
//         console.log('Submitted Data:', form); 
//         navigate('/Registerform');
//         navigate('/Loginformdata');
//       } else {
//         const errorData = await response.json();
//         alert(`Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while logging in. Please try again.');
//     }
//   };

//   const navigate = useNavigate();
//   const RegisterForm = () => {
//     navigate('/Registerform');
//   };

//   return (
//     <form className="form1" onSubmit={handleSubmit}>
//       <h1 className="head1 mt-2">Login form</h1>
      
//       <label className="label mt-4" > Username </label>
//         <input className="box1" type="text" name="Username" placeholder="Username" value={form.Username} onChange={handleInput}/>
// <br/>
//         {errors.Username && (
//           <span style={{ color: 'red', fontSize: '13px', paddingLeft:'14px' }}>{errors.Username}</span>
//         )}

//      <div>
//       <label className="label mt-2"> Password  </label>
//         <input
//           className="box1"
//           type="password"
//           name="Password"
//           placeholder="Password"
//           value={form.Password}
//           onChange={handleInput}
//         />
//         <br/>
//          {errors.Password && (
//           <span style={{ color: 'red', fontSize: '13px' , paddingLeft:'14px' }}>{errors.Password}</span>
//         )}
//     </div>
//       <div className='pass'>
//       <a className="password" href="">
//         Forgot Password?
//       </a>
//       </div>
//       <br />
//       <div className="submit">
//         <button className="button2 mb-2" type="submit">
//           Login
//         </button>
//       </div>
//       <p className="para1">
//         Don't have an Account?
//         <a className="link" href="" onClick={RegisterForm}>
//           Signup
//         </a>
//       </p>
//     </form>
//   );
// }

// export default Login;


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

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
          // navigate('/Registerform');
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
    <form className="form1" onSubmit={formik.handleSubmit}>
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
        <button className="button2 mb-2" type="submit">
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
  );
}

export default Login;
