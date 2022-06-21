import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {MyPostsArrayProps} from "../../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxlength10 =maxLengthCreator(10)

type PropsType = {
    posts: MyPostsArrayProps[]
    addPost:(newPostText:string)=>void

}
export const MyPosts = React.memo( (props: PropsType) => {
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
})

type FormDataType = {
    newPostText: string
}

const AddMyPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name="newPostText"
                    placeholder="Enter posts"
                    validate={[required, maxlength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMyPostsFormRedux = reduxForm<FormDataType>({form: 'PostAddNwPostForm'})(AddMyPostsForm)