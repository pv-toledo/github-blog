import { useEffect, useState } from "react"
import { api } from "../../lib/axios"

export function Test () {

    const [userData, setUserData] = useState({
        name: "",
        login: "",
        bio:""
    })

    async function getUserData() {
        const response = await api.get(`users/pv-toledo`)
        const {bio, login, name} = response.data
        setUserData({name, login, bio})
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <div>
            <h1>{userData.name}</h1>
            <h2>{userData.login}</h2>
            <h3>{userData.bio}</h3>
        </div>
    )
}