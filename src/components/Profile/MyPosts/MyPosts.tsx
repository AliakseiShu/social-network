import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsArrayProps} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    posts: MyPostsArrayProps[]
    addPost:(newPostText:string)=>void

}
export const MyPosts = (props: PropsType) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    //let newPostElement = useRef<HTMLTextAreaElement>(null);


    let addPostChange = (values:any) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddMyPostsFormRedux onSubmit={addPostChange}/>
              <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

type FormDataType = {
    newPostText: string
}

const AddMyPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newPostText" placeholder="Enter posts"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMyPostsFormRedux = reduxForm<FormDataType>({form: 'PostAddNwPostForm'})(AddMyPostsForm)