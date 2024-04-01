import axios from "axios"
import { useEffect, useState } from "react"

function ConfirmEmail() {
    const queryParameters = new URLSearchParams(window.location.search)
    const code = queryParameters.get("code")
    const user = queryParameters.get("user")
    const [message, setMessage] = useState('')
    // const regex = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
    useEffect(() => {
        axios.get(`http://192.168.1.119:8080/api/v1/auth/register/confirm-email?code=${code}&user=${user}`)
            .then((r) => {
                setMessage(r.data.message)
            }).catch((err) => {
                setMessage(err)
            })
        console.log('ishladi!');
    }, [])

    return (
        <div className="mt-52">
            <h1>
                {JSON.stringify(message)}
            </h1>
        </div>
    )
}

export default ConfirmEmail