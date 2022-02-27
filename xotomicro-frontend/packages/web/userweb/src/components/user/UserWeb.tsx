import React from "react";
import UserApi from "../../api/UserApi";
import {globalEventDistributor} from "../../App";
import {getToken, getUsername} from "../../services/UserServices";

const token: string | null = getToken();

export const UserWeb: any = (props: any): JSX.Element => (
    <div className="section-app__item">
        <p>Current: {getUsername()}</p>
        <p>User list</p>
        <UserApi token={token} />
    </div>
);
