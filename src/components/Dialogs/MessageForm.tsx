import React, {FC} from 'react';
import {Field, Formik} from "formik";

type MessageFormPropsType = {
    addMessage: (newMessageText: string) => void
}
export const AddMessageForm: FC<MessageFormPropsType> = ({addMessage}) => {

    const submit = (values: any, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        addMessage(values.message)
    }

    return <>
        <Formik
            initialValues={{message: ''}}
            onSubmit={submit}
        >
            <form>
                <Field
                    id="message"
                    component="textarea"
                    type="text"
                    name="message"
                    placeholder="Enter your message"
                />
                <button type="submit">
                    Send
                </button>
            </form>
        </Formik>
    </>
};


// const formik = useFormik({
//     initialValues: {
//         messageText: ''
//     },
//     onSubmit: (values) => {
//         addMessage(values.messageText)
//     }
// })
//
// return (
//     <form>
//         <input
//             type="text"
//             name="messageText"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.messageText}
//         />
//         <button type="submit">Send</button>
//     </form>
// );