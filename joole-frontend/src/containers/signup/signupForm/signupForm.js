import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const SignupForm = (props) => {
    //render(){
        return(
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    profileImage: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('Username is required'),
                    password: Yup.string()
                        .required('Password is required')
                        .min(4,'Password must be at least 6 characters'),
                   /* email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),*/
                    profileImage: Yup.string()
                        .url("Proper URL format requred")
                })}
                onSubmit={fields => props.signupSubmit(fields)}
            >
                {({ errors, status, touched }) =>(
                    <Form>
                        <div className="form-group">
                            <Field name="username" type="text" className={'form-control username '+ (errors.username && touched.username ? 'is-invalid' : '')} placeholder="Username or Email"/>
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="password" type="text" className={'form-control password '+ (errors.password && touched.password ? 'is-invalid' : '')} placeholder="Password" />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="profileImage" type="text" className={'form-control '+ (errors.password && touched.password ? 'is-invalid' : '')} placeholder="Profile Image" />
                            <ErrorMessage name="profileImage" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group right">
                            <button type="submit">Sign Up</button>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    //}
};

export default SignupForm;
//use formik and yup
//https://jasonwatmore.com/post/2019/04/10/react-formik-form-validation-example
//https://jaredpalmer.com/formik/docs/tutorial

//render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>

/*
                        <div className="form-group">
                            <Field name="email" type="text" className={'form-control '+ (errors.username && touched.username ? 'is-invalid' : '')} placeholder="Email"/>
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
 */