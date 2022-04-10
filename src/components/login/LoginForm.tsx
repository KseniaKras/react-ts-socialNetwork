import React from 'react';
import {useFormik} from "formik";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {authoriseUserTC, loginUserTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";


// const LoginForm = () => {
// /*    const onSubmit = (values: any, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
//         console.log(values)
//         setSubmitting(false)
//         /!*const newUser: any = {
//             email: data.email,
//             password: data.passwors,
//             rememberMe: data.rememberMe,
//             captcha: false
//         }
//         authoriseUserTC()
//         //loginUserTC(newUser.email, newUser.password, newUser.rememberMe, newUser.captcha)
//         setSubmitting(true)*!/
//     }*/
//     return (
//         <>
//             <Formik
//                 initialValues={{
//                     login: '',
//                     password: '',
//                     rememberMe: false,
//                     captcha: false
//                 }}
//                 validate={values => {
//                     const errors = {login: ''};
//                     // if (!values.login) {
//                     //    errors.login = 'Required';
//                     // } else if (
//                     //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)
//                     // ) {
//                     //    errors.login = 'Invalid email address';
//                     // }
//                     return errors;
//                 }}
//                 onSubmit={(values, {setSubmitting} ) => {
//                     console.log(values)
//                     setSubmitting(false)}}
//             >
//                 {({isSubmitting}) => (
//                     <Form>
//                         <div>
//                             <Field placeholder="login" type="login" name="login"/>
//                             <ErrorMessage name="login" component="div"/>
//                         </div>
//                         <div>
//                             <Field type="password" name="password" placeholder="password"/>
//                             <ErrorMessage name="password" component="div"/>
//                         </div>
//                         <div>              {/*remember me ??*/}
//                             <Field name="rememberMe" type="checkbox" />
//                             <button type="submit" disabled={isSubmitting}>
//                                 Submit
//                             </button>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//         </>
//     );
// };

const LoginForm = () => {
    const dispatch = useDispatch()

    const validate = (values: any) => {
        const errors = {
            email: '',
            password: '',
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (values.email.length < 4) {
            errors.email = 'Must be 5 characters or more'
        }

        if (!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 5) {
            errors.password = 'Must be 5 characters or more'
        }
        return errors
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: (values) => {
            //dispatch(loginUserTC(values.email, values.password, false))
            dispatch(authoriseUserTC())
           // alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div>
            <form >
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;