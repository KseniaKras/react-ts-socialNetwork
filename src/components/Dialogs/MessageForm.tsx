import React, {FC} from 'react';
import {Field, Form, Formik} from "formik";
import {validateMessage} from "../../utils/Validators";
import s from "../Profile/MyPosts/MyPosts.module.css";

type MessageFormPropsType = {
    addMessage: (newMessageText: string) => void
}
export const AddMessageForm: FC<MessageFormPropsType> = ({addMessage}) => {

    const submit = (values: any, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        addMessage(values.message)
        console.log('message')
        setSubmitting(false)
    }

    return <>
        <Formik
            initialValues={{message: ''}}
            onSubmit={submit}
        >
            {({isSubmitting, errors, touched}) => (
                <Form>
                    <Field
                        id="message"
                        component="textarea"
                        type="text"
                        name="message"
                        placeholder="Enter your message"
                        validate={validateMessage}
                        className={errors.message ? s.textareaWithError : s.textarea}
                    />
                    {errors.message
                        && touched.message
                        && <div className={errors.message && s.errorText}>{errors.message}</div>}
                    <div>
                        <button type="submit" disabled={isSubmitting}>
                            Send
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </>
};