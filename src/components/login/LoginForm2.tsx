// import {Field, Form, Formik} from 'formik';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { login } from '../../redux/auth-reducer';
// import { AppStateType } from '../../redux/reduxState';
// import { validateLogin, validatePassword } from '../../utils/validate';
// import classes from './Login.module.scss';
//
// export const Login = () => {
//     const {isAuth,id} = useSelector((state:AppStateType)=> state.auth)
//     if (isAuth){
//         return <Navigate to={`/profile/${id}`}/>
//     }
//     return (
//         <div className={classes.containerForm}>
//             <h1>Login</h1>
//             <LoginForm/>
//         </div>
//     )
// }
//
// const LoginForm = () => {
//     const dispatch = useDispatch()
//     return (
//         <Formik
//             initialValues={{email: '', password: '', rememberMe: false}}
//             onSubmit={(values, {setSubmitting, setStatus}) => {
//                 dispatch(login(values, setStatus))
//                 setTimeout(() => {
//                     setSubmitting(false);
//                 }, 400);
//             }}>
//             {({isSubmitting, errors, touched, status}) => (
//                 <Form>
//                     <div><Field className={errors.email ? classes.loginError : classes.loginInput} placeholder="Login"
//                                 name="email" validate={validateLogin}/>
//                         {errors.email && touched.email && <div className={classes.errorText} >{errors.email}</div>}
//                     </div>
//                     <div><Field className={errors.password ? classes.loginError : classes.loginInput} type="password"
//                                 name="password" placeholder="Password" validate={validatePassword}/>
//                         {errors.password && touched.password &&
//                             <div className={classes.errorText}>{errors.password}</div>}</div>
//                     <div><Field type="checkbox" name="rememberMe"/> remember me</div>
//                     {status && (
//                         <div className={classes.errorStatus}>{status}</div>
//                     )}
//                     <button type="submit" disabled={isSubmitting}>
//                         Submit
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     )
// }
let plug
export default plug;