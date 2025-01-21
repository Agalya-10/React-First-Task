import React, { useContext, useState } from 'react';
import { LocationContext } from '../Context/LocationContext';
// import LocationModal from './LocationModal';
// import { LocationContext } from './LocationContext';
// import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import images from '../Images/register.jpg';
import { useLocation } from 'react-router-dom';

function Registerform() {
  const { city, state, country } = useContext(LocationContext);

  // const navigate = useNavigate();
  const location = useLocation(); 
  const rowData = location.state?.rowData; 

  const initialValues = {
    firstname: rowData?.firstname || '',
    lastname: rowData?.lastname || '',
    mobile: rowData?.mobile || '',
    acceptTerms: false,
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),
 
    acceptTerms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions'),
  });


  return (
  
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={handleSubmit}
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
              <label>Mobile Number</label>
              <Field className="box3" name="mobile"  type="text" placeholder="Mobile Number" style={{ width: '100%' }} />
              <ErrorMessage name="mobile" component="span" className="error" />
            </div>

            {/* <p>
        City: {city} <br />
        State: {state} <br />
        Country: {country}
      </p> */}
         
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
                // onClick={() => navigate('/FormTask')}
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

// import React, { useContext, useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import City from './City'; 
// import State from './State'; 
// import Country from './Country'; 
// // import { LocationContext } from './LocationContext';
// import images from '../Images/register.jpg';

// function Registerform() {
//   const { city, state, country } = useState(''); 
//   const navigate = useNavigate(); 
//   const location = useLocation();
//   const rowData = location.state?.rowData; 

//   const initialValues = {
//     firstname: rowData?.firstname || '',
//     lastname: rowData?.lastname || '',
//     mobile: rowData?.mobile || '',
//     acceptTerms: false,
//   };

//   const validationSchema = Yup.object({
//     firstname: Yup.string().required('Firstname is required'),
//     lastname: Yup.string().required('Lastname is required'),
//     mobile: Yup.string()
//       .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
//       .required('Mobile number is required'),
//     acceptTerms: Yup.boolean()
//       .oneOf([true], 'You must accept the terms and conditions'),
//   });

//   const handleSubmit = (values) => {
//     console.log('Form Submitted:', values);
//     alert('Form Submitted Successfully!');
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//       enableReinitialize
//     >
//       {() => (
//         <div style={{ display: 'flex', padding: '20px 19rem' }}>
//           <img
//             className="image"
//             src={images}
//             alt="Registration"
//             style={{
//               width: '370px',
//               borderRadius: '5px',
//               boxShadow:
//                 'rgba(60, 66, 87, 0.12) 0px 0px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px',
//             }}
//           />
//           <Form className="form2" style={{ width: '400px' }}>
//             <h1 className="head1">{rowData ? 'Edit Form' : 'Register Form'}</h1>
//             <div style={{ display: 'flex' }}>
//               <div className="label1 mt-3" style={{ width: '100%' }}>
//                 <label>Firstname</label>
//                 <Field
//                   className="box2"
//                   name="firstname"
//                   placeholder="Firstname"
//                   style={{ width: '96%' }}
//                 />
//                 <ErrorMessage name="firstname" component="span" className="error" />
//               </div>
//               <div className="label1 mt-3" style={{ width: '100%' }}>
//                 <label>Lastname</label>
//                 <Field
//                   className="box2"
//                   name="lastname"
//                   autoComplete="off"
//                   placeholder="Lastname"
//                   style={{ width: '100%' }}
//                 />
//                 <ErrorMessage name="lastname" component="span" className="error" />
//               </div>
//             </div>
//             <div className="label2" style={{ width: '100%' }}>
//               <label>Mobile Number</label>
//               <Field
//                 className="box3"
//                 name="mobile"
//                 type="text"
//                 placeholder="Mobile Number"
//                 style={{ width: '100%' }}
//               />
//               <ErrorMessage name="mobile" component="span" className="error" />
//             </div>

//             <p>
//               <strong>City:</strong> {city} <br />
//               <strong>State:</strong> {state} <br />
//               <strong>Country:</strong> {country}
//             </p>

//             <div style={{ margin: '15px 0' }}>
//               <label>
//                 <Field
//                   type="checkbox"
//                   name="acceptTerms"
//                   style={{ marginRight: '10px' }}
//                 />
//                 I accept the terms and conditions
//               </label>
//               <ErrorMessage
//                 name="acceptTerms"
//                 component="span"
//                 className="error"
//                 style={{ color: 'red', display: 'block', marginTop: '5px' }}
//               />
//             </div>
//             <button className="button2" type="submit" style={{ width: '100%' }}>
//               {rowData ? 'Update' : 'Register'}
//             </button>
//             <p className="para2">
//               Already have an Account?
//               <a
//                 href="#"
//                 onClick={() => navigate('/FormTask')}
//                 className="link"
//                 style={{ color: 'rgb(235, 32, 59)' }}
//               >
//                 Login
//               </a>
//             </p>
//           </Form>
//         </div>
//       )}
//     </Formik>
//   );
// }

// export default Registerform;


// import React, { useContext, useState } from 'react';
// import { LocationContext } from '../Context/LocationContext';
// import LocationModal from './LocationModal';

// const Registerform = () => {
//   const { city, state, country } = useContext(LocationContext);
//   const [showModal, setShowModal] = useState(false);

//   const handleModal = () => setShowModal(!showModal);

//   return (
//     <div>
//       <form>
//         <h1>Register Form</h1>
//         <label>Firstname</label>
//         <input type="text" name="firstname"placeholder="Firstname"/>
//         <label>Lastname</label>
//         <input type="text" name="lastname"placeholder="Lastname"/>
//         <label>Mobile</label>
//         <input type="text" name="mobile"placeholder="Mobile Number"/>

//         <div>
//           <p>City: {city}</p>
//           <p>State: {state}</p>
//           <p>Country: {country}</p>
//           <button type="button" onClick={handleModal}>
//             Select Location
//           </button>
//         </div>

//         <button type="submit">Register</button>
//       </form>

//       {/* Modal */}
//       <LocationModal show={showModal} handleClose={handleModal} />
//     </div>
//   );
// };

// export default Registerform;
