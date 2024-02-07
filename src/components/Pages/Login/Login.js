import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import PasswordShow from '../../../assets/images/password-show.svg';
import PasswordHide from '../../../assets/images/password-hide.svg'
import { useState } from 'react';
import * as Yup from 'yup';
import AuthUser from '../Services/AuthUser';
import Loader from '../../Loader'

const validationSchema = Yup.object().shape({
  //email: Yup.string().email('Invalid email address').required('Email is required'),
  // email: Yup.string()
  //   .matches(
  //     /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$|^[A-Za-z0-9._%-]+$/,
  //     'Invalid email or username'
  //   )
  //   .required('Email or username is required'),
  email: Yup.string().required('Username is required'),
  //password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  password: Yup.string().required('Password is required'),
});
const Login = () => {
  const [loading, setLoading] = useState(false);
  const { httppost, setToken } = AuthUser();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // const handleLogin = async (values, { setSubmitting }) => {
  //   try {
  //     // Assuming you have a login API endpoint
  //     http.post('/login', {
  //       username: values.email, // Assuming email is used as the username
  //       password: values.password,
  //     }).then((res) => {
  //       setToken(res.data.user, res.data.access);
  //     })
  //     // You can redirect to another page or perform any other actions here
  //   } catch (error) {
  //     console.error('Login failed:', error.response.data);
  //     // Handle login failure, e.g., show an error message to the user
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  // const handleLogin = async (values, { setSubmitting }) => {
  //   try {
  //     const response = await fetch(`${apiUrl}/login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: values.email,
  //         password: values.password,
  //       }),
  //     });
  
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log('Response Data:'+data);
  //       setToken(data.user, data.access);
  //       // You can redirect to another page or perform any other actions here
  //     } else {
  //       const errorData = await response.json();
  //       console.error('Login failed:', errorData);
  //       // Handle login failure, e.g., show an error message to the user
  //     }
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     // Handle other errors, e.g., network issues
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      setLoading(true);
      // Make an API call to the 'login' endpoint with a POST request
      const res = await httppost('login', 'POST',{
        username: values.email,
        password: values.password,
      });
  
      //console.log('Login successful:', res);
      setToken(res.data.user, res.data.access);
      // You can redirect to another page or perform any other actions here
    } catch (error) {
      // Handle errors during the API call (e.g., show an error message to the user)
      console.error('Login failed:', error);
      // Set the error message state to display it to the user
      setErrorMessage("Unauthorized user. Please check your credentials.");
    } finally {
      // Set 'setSubmitting' to false to indicate that the submission process is complete
      setSubmitting(false);
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      {loading && <Loader />}
      <div className="container">
        <div className='primary-title text-center text-white'>
          HVSS
        </div>
        <div className="white-box">
          <h1 className="secondary-title mb-5">Login</h1>
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className='form-group mb-4'>
                  <label htmlFor="email" className='label-title mb-2 d-block w-100 text-left'>Email</label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <div className='form-group mb-4'>
                  <label htmlFor="password" className='label-title mb-2 d-block w-100 text-left'>Password</label>
                  <div className='position-relative'>
                    <img
                      src={showPassword ? PasswordHide : PasswordShow}
                      className='ico_float right c-pointer'
                      alt='Password'
                      onClick={() => setShowPassword(!showPassword)}
                    />
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className="pe-5"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </div>
                  <ErrorMessage name="password" component="div" className="error-message" />
                </div>
                <div className='text-end mb-4'>
                  <span className='regular-title c-pointer'>Forgot password?</span>
                </div>
                <div className='form-group mb-4'>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    name="login"
                    id='login'
                    className='primary-button mx-auto'
                  >
                    Login
                  </button>
                </div>
                <div className='text-center'>
                  <span className='regular-title c-pointer'>New user? <Link to="/register" className='highlight'>Create account</Link></span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Login;