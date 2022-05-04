import axios from "axios"

export const getWatchLaterService = async (encodedToken) => {
    return await axios.get("/api/user/watchlater",{
        headers:{
            authorization: encodedToken
        }
    })
}