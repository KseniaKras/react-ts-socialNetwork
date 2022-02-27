import React from 'react';
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ActionsTypes, AppStateType} from "../../../redux/redux-store";


type mapStateToPropsType = {
    profilePage: ProfilePageType
}

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

type mapDispatchToPropsType ={
    updateNewPostText: (newText: string)=>void
    addPost: ()=>void
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes)=>void):mapDispatchToPropsType => {
    return {
        updateNewPostText: (newText: string)=>{
            dispatch(updateNewPostTextAC(newText))
        },
        addPost: ()=>{
            dispatch(addPostAC())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;