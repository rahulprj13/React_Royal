import React, { useState } from 'react'
import axios from 'axios'

const Apicall = () => {

    const [message, setMessage] = useState("")
    const [users, setUsers] = useState([])
    const [show, setShow] = useState(false)

    const getUser = async () => {

        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response);

        console.log(response.data.message)
        setMessage(response.data.message)
        setUsers(response.data.data)
        // setShow(true)
    }

    return (
        <div>
            <h1>API</h1>
            <button onClick={() => getUser()} onFocus={() => setShow(true)}>get</button>
            <h3>{message}</h3>

            {show &&
                <table className="table" >



                    <thead >

                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user) => {
                                return (

                                    <tr>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>

                                )
                            })
                        }



                    </tbody>



                </table>
            }
        </div>
    )
}

export default Apicall
