import { Formik, Form, Field } from 'formik';
import {Row, Col} from 'react-bootstrap';

const Register = () => {
    return (
      <div className="login-wrapper d-flex align-items-center justify-content-center"> 
        <div className="container">
          <div className='primary-title text-center text-white'>
            HVSS
          </div>
          <div className="white-box">
            <h1 className="secondary-title mb-5">Create your account</h1>
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
                  <Row>
                    <Col md={6}>
                      <div className='form-group mb-4'>
                        <label for="firstname" className='label-title mb-2 d-block w-100 text-left'>First name</label>
                        <Field 
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          // value={values.firstname}
                        />
                        {/* {errors.firstname && touched.firstname && errors.firstname} */}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className='form-group mb-4'>
                        <label for="lastname" className='label-title mb-2 d-block w-100 text-left'>Last name</label>
                        <Field 
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          // value={values.lastname}
                        />
                        {/* {errors.lastname && touched.lastname && errors.lastname} */}
                      </div>
                    </Col>
                    <Col md={12}>
                      <div className='form-group mb-4'>
                        <label for="email" className='label-title mb-2 d-block w-100 text-left'>Email</label>
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
                    </Col>
                    <Col md={12}>
                      <div className='form-group mb-4'>
                        <label for="email" className='label-title mb-2 d-block w-100 text-left'>Password</label>
                        <Field 
                          type="password"
                          name="password"
                          placeholder="Password"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          // value={values.password}
                        />
                        {/* {errors.password && touched.password && errors.password} */}
                      </div> 
                    </Col>
                  </Row>
                  <div className='form-group mb-4'>
                    <button type="submit" 
                      // disabled={isSubmitting}
                      name="login"
                      id='login'
                      className='primary-button mx-auto'
                    >
                      Create Account
                    </button>
                  </div>
                  <div className='text-center'>
                    <span className='regular-title c-pointer'>Already user? Login</span>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    );
  };
export default Register;