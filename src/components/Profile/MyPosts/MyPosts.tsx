import React, {FC} from 'react';
import './MyPosts.module.css'
import Post from "./Post/Post";
import s from './MyPosts.module.css';
import {ProfilePageType} from "../../../redux/profile-reducer";
import {Field, Form, Formik} from "formik";
import { validatePost} from "../../../utils/Validators";



type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: (postText: string)=>void
}

function MyPosts({profilePage,addPost,...props}: MyPostsPropsType) {

    let postsElements = profilePage.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/> )

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <AddPostForm addPost={addPost} />
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;



type AddPostFormPropsType = {
    addPost: (postText: string)=>void
}
export const AddPostForm: FC<AddPostFormPropsType> = ({addPost}) => {

    const submit =
        (values: any, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        addPost(values.post)
        console.log('post')
        setSubmitting(false)
    }

    return (
        <>
            <Formik
                initialValues={{post: ''}}
                onSubmit={submit}
            >
                {({isSubmitting, errors, touched}) => (
                    <Form>
                        <Field
                            id="post"
                            component="textarea"
                            type="text"
                            name="post"
                            placeholder="Enter your post"
                            validate={validatePost}
                            className={errors.post ? s.textareaWithError : s.textarea}
                        />
                        {errors.post
                            && touched.post
                            && <div className={errors.post && s.errorText}>{errors.post}</div>}
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Send
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}