import React from "react";
import ApiUser from "../../api/ApiUser";
import {globalEventDistributor} from "../../App";
import {getToken, getUsername} from "../../services/UserServices";

const token: string | null = getToken();

export const WebUser: any = (props: any): JSX.Element => (
    <div className="section-app__item">
        <p>Current: {getUsername()}</p>
        <p>User list</p>
        <ApiUser token={token} />
    </div>
);
