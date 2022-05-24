import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "928789de-36fd-420a-8028-1ba4d0547e88"
        //"API-KEY": "2f128d38-76ff-460e-b5c2-dd10d00dee45"

    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage}?&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)

    },
    getProfile(userId: string) {
        return instance.get(`profile/2` + userId);

    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`,)

    }
}

