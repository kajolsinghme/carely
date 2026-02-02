import api from "../lib/axios"

export const signUpApi = async(data: {email: string, password: string}) => {
    const res = await api.post("/auth/signup",data)
    return res.data
}

export const loginApi = async(data: {email: string, password: string}) => {
    const res = await api.post("/auth/login",data)
    return res.data
}