import React, {FC} from "react";
import {FilterType} from "../../redux/users-reducer";
import {Field, Form, Formik} from "formik";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}


type UsersSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
}
export const UsersSearchForm: FC<UsersSearchFormPropsType> = ({onFilterChanged}) => {

    const submit = (values: FilterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return <>
        <Formik
            initialValues={{term: '', friend: "null"}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </>
}