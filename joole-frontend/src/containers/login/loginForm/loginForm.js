import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const LoginForm = (props) => {
    //render(){
        return(
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('Username is required'),
                    password: Yup.string()
                        .required('Password is required')
                })}
                onSubmit={fields => props.loginSubmit(fields)}
            >
                {({ errors, status, touched }) =>(
                    <Form>
                        <div className="form-group">
                            <Field name="username" type="text" className={'form-control username'+ (errors.username && touched.username ? 'is-invalid' : '')} placeholder="Username or Email"/>
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <Field name="password" type="text" className={'form-control password'+ (errors.password && touched.password ? 'is-invalid' : '')} placeholder="Password" />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group right">
                            <button type="submit">Log In</button>
                        </div>
                    </Form>
                )}
            </Formik>
        );
    //}
};

export default LoginForm;
//use formik and yup
//https://jasonwatmore.com/post/2019/04/10/react-formik-form-validation-example
//https://jaredpalmer.com/formik/docs/tutorial

//render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>