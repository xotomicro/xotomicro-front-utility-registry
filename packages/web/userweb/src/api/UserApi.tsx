import React, {Key, useEffect, useState} from "react";
import {UserModel} from "../model/UserModel";

function UserApi({token}: {token: any}) {
    const [users, setUsers]: any = useState(null);
    const [loading, setLoading]: any = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://${process.env.SERVICE_URL}:8080/users`, {headers: {"Content-Type": "application/json", Authorization: token}})
            .then((response: Response) => response.json())
            .then(setUsers)
            .then(() => setLoading(false));
    }, [token]);

    if (loading) return <p>Loading...</p>;

    if (users) {
        return (
            <div className="user">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Full name</th>
                            <th>Scope</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: UserModel, index: Key | null | undefined) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.fullName}</td>
                                <td>{user.scope}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return <p>Cannot load data</p>;
}

export default UserApi;
