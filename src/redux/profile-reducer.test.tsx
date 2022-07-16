import ProfileReducer, {addPostActionCreator, deletePost, MyPostsArrayProps} from "./profile-reducer";
import {ContactsPropsType, PhotoPropsType, ProfileType} from "../components/Profile/ProfileContainer";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 10},
    ] as Array<MyPostsArrayProps>,
    profile: {
        userId: 0,
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {} as ContactsPropsType,
        photos: {} as PhotoPropsType,
    },
    status: "",
}

test(' length of post should be incremented', () => {

    let action = addPostActionCreator("it-kam")

    let newState = ProfileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
});

test('message of new  post should be correct', () => {

    let action = addPostActionCreator("it-kam")

    let newState = ProfileReducer(initialState, action)

    expect(newState.posts[2].message).toBe("it-kam")
});

test('after deleting of messages should be decrement', () => {

    let action = deletePost(1)

    let newState = ProfileReducer(initialState, action)

    expect(newState.posts.length).toBe(1)
});

test(`after deleting of messages shouldn't be decrement if id is incorrect`, () => {

    let action = deletePost(10)

    let newState = ProfileReducer(initialState, action)

    expect(newState.posts.length).toBe(2)
});
