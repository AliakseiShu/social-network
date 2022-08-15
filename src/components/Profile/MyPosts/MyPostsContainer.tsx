import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {MyPostsArrayProps} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToProps = {
    posts: MyPostsArrayProps[]
}

type MapDispatchToProps = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profilePage.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {

        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

