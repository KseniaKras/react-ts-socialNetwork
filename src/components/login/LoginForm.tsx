import React from 'react';
import {ErrorMessage, Field, Formik} from "formik";
import {Form} from 'formik';
import {loginUserTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";

type ValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm = () => {

    const dispatch = useDispatch()

    const submit = (values: ValuesType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        let {email, password, rememberMe} = values
        console.log(values)
        setSubmitting(false)
        dispatch(loginUserTC(email, password, rememberMe))
    }


    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                    // captcha: false,
                }}
                onSubmit={submit}
            >
                {({isSubmitting, errors, touched}) => (
                    <Form>
                        <div>
                            <Field placeholder="email" type="email" name="email"/>
                            <ErrorMessage name="email" component="div"/>
                        </div>
                        <div>
                            <Field type="password" name="password" placeholder="password"/>
                            <ErrorMessage name="password" component="div"/>
                        </div>
                        <div>
                            <Field name="rememberMe" type="checkbox"/>
                            <button type="submit" disabled={isSubmitting}>
                                Login
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;