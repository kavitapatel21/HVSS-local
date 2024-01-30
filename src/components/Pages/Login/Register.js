import { Formik, Form, Field, ErrorMessage  } from 'formik';
import {Row, Col} from 'react-bootstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import PasswordShow from '../assets/images/password-show.svg';


const validationSchema = Yup.object({
  firstname: Yup.string().required('First name is required'),
  lastname: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});
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
            initialValues={{ firstname: '', lastname: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Perform your submission logic here
              console.log(values);
              setSubmitting(false);
            }}
          >
            <Form>
              <Row>
                <Col md={6}>
                  <div className='form-group mb-4'>
                    <label htmlFor="firstname" className='label-title mb-2 d-block w-100 text-left'>First name</label>
                    <Field 
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                    />
                    <ErrorMessage name="firstname" component="div" className="error-message" />
                  </div>
                </Col>
                <Col md={6}>
                  <div className='form-group mb-4'>
                    <label htmlFor="lastname" className='label-title mb-2 d-block w-100 text-left'>Last name</label>
                    <Field 
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                    />
                    <ErrorMessage name="lastname" component="div" className="error-message" />
                  </div>
                </Col>
                <Col md={12}>
                  <div className='form-group mb-4'>
                    <label htmlFor="email" className='label-title mb-2 d-block w-100 text-left'>Email</label>
                    <Field 
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                </Col>
                <Col md={12}>
                  <div className='form-group mb-4'>
                    <label htmlFor="password" className='label-title mb-2 d-block w-100 text-left'>Password</label>
                    <div className='position-relative'>
                      <img src={PasswordShow} className='ico_float right c-pointer' alt='Password' />
                      <Field 
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                    </div>
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div> 
                </Col>
              </Row>
              <div className='form-group mb-4'>
                <button type="submit" className='primary-button mx-auto'>
                  Create Account
                </button>
              </div>
              <div className='text-center'>
                <span className='regular-title c-pointer'>Already a user? <Link to="/login" className='highlight'>Login</Link></span>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
    );
  };
export default Register;