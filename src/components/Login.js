import { Formik, Form, Field } from 'formik';
import PasswordShow from "../assets/images/password-show.svg";
import PasswordHide from "../assets/images/password-hide.svg";

const Login = () => {
    return (
      <div className="login-wrapper d-flex align-items-center justify-content-center"> 
        <div className="container">
          <div className='primary-title text-center text-white'>
            HVSS
          </div>
          <div className="white-box">
            <h1 className="secondary-title mb-5">Login</h1>
            <Formik
              // initialValues={{ email: '', password: '' }}
              // validate={values => {
              //   const errors = {};
              //   if (!values.email) {
              //     errors.email = 'Required';
              //   } else if (
              //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              //   ) {
              //     errors.email = 'Invalid email address';
              //   }
              //   return errors;
              // }}
              // onSubmit={(values, { setSubmitting }) => {
              //   setTimeout(() => {
              //     alert(JSON.stringify(values, null, 2));
              //     setSubmitting(false);
              //   }, 400);
              // }}
            >
              {({
                // values,
                // errors,
                // touched,
                // handleChange,
                // handleBlur,
                // handleSubmit,
                // isSubmitting,
                /* and other goodies */
              }) => (
                <Form 
                // onSubmit={handleSubmit}
                >
                  <div className='form-group mb-4'>
                    <label htmlFor="email" className='label-title mb-2 d-block w-100 text-left'>Email</label>
                    <Field 
                      type="email"
                      name="email"
                      placeholder="Email"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      // value={values.email}
                    />
                    {/* {errors.email && touched.email && errors.email} */}
                  </div>
                  <div className='form-group mb-4'>
                    <label htmlFor="email" className='label-title mb-2 d-block w-100 text-left'>Password</label>
                    <div className='position-relative'>
                      <Field 
                        type="password"
                        name="password"
                        placeholder="Password"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        // value={values.password}
                      />
                      <img src={PasswordShow} className='ico_float right' alt='Password' />
                      {/* <img src={PasswordHide} className='ico_float right' alt='Password' /> */}
                    </div>
                    {/* {errors.password && touched.password && errors.password} */}
                  </div>
                  <div className='text-end mb-4'>
                    <span className='regular-title c-pointer'>Forgot password?</span>
                  </div>
                  <div className='form-group mb-4'>
                    <button type="submit" 
                      // disabled={isSubmitting}
                      name="login"
                      id='login'
                      className='primary-button mx-auto'
                    >
                      Login
                    </button>
                  </div>
                  <div className='text-center'>
                    <span className='regular-title c-pointer'>New user? Create account</span>
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