import api from "../lib/axios"

export const fetchDoctorProfileApi = async()  => {
    const userId = localStorage.getItem('userId')
    // console.log("userId",userId)
    const res = await api.get(`/doctor/${userId}`)
    return res.data
}