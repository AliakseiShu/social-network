import React from 'react'
import {UserType} from "../../redux/users-reducer";
import {Paginator} from "../Paginator/Paginator";
import {User} from "./User";

type UsersNewPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    portionSize:number
    currentPage: number
    onPageChanged: (currentPage: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

export let Users = (props: UsersNewPropsType) => {
    return <div>
        <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged} pageSize={props.pageSize}
                   totalItemsCount={props.totalUsersCount} portionSize={props.portionSize}/>
        {
            props.users.map(u => <User key={u.id}
                                       user={u}
                                       follow={props.follow}
                                       unfollow={props.unfollow}
                                       followingInProgress={props.followingInProgress}
                />
            )
        }
    </div>
}