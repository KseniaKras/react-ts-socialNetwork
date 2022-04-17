import React from 'react';
import {ErrorMessage, Field, Formik} from "formik";
import {Form} from 'formik';
import {loginUserTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";
import {validateEmail, validatePassword} from "../../utils/Validators";

type ValuesType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm = () => {

    const dispatch = useDispatch()

    /*    const submit = (values: ValuesType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }, {setStatus}: {setStatus: (status?: any) => void}) => {
            let {email, password, rememberMe} = values
            console.log(values)
            setSubmitting(false)
            dispatch(loginUserTC(email, password, rememberMe, setStatus))
        }*/

    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                    // captcha: false,
                }}
                onSubmit={(values: ValuesType, {setSubmitting, setStatus}) => {
                    let {email, password, rememberMe} = values
                    setSubmitting(false)
                    dispatch(loginUserTC(email, password, rememberMe, setStatus))
                }}
            >
                {({isSubmitting, status}) => (
                    <Form>
                        <div>
                            <Field placeholder="email" type="email" name="email" validate={validateEmail}/>
                            <ErrorMessage name="email" component="div"/>
                        </div>
                        <div>
                            <Field type="password" name="password" placeholder="password" validate={validatePassword}/>
                            <ErrorMessage name="password" component="div"/>
                        </div>
                        <div>
                            <Field name="rememberMe" type="checkbox"/>
                            {status && <div>{status}</div>}
                            {/*{console.log(status)}*/}
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