import React from "react";
import ApiEvent from "../../api/ApiEvent";
import {getToken} from "../../services/EventServices";

const token: string | null = getToken();

export const WebEvent: any = (props: any): JSX.Element => (
    <div className="section-app__item">
        <p>Event list</p>
        <ApiEvent token={token} />
    </div>
);
