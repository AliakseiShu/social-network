import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0',
    headers:{
        "API-KEY" : "2f128d38-76ff-460e-b5c2-dd10d00dee45"
    }
})

export const usersAPI = {
getUsers(currentPage= 1,pageSize= 10)  {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {
                return response.data
            })
    }
}

export const getUsers = (currentPage= 1,pageSize= 10) => {
    return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
        .then(response=> {
        return response.data
    })
}

/*
export const getUsers = (currentPage= 1,pageSize= 10) => {
    return axios.get(baseUrl+`/follow?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        }).then(response=> {
        return response.data
    })
}*/
