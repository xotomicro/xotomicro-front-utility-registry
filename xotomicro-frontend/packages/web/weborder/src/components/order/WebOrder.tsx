import React from "react";
import ApiOrder from "../../api/ApiOrder";
import {getToken} from "../../services/OrderServices";

const token: string | null = getToken();

export const WebOrder: any = (props: any): JSX.Element => (
    <div className="section-app__item">
        <p>Order list</p>
        <ApiOrder token={token} />
    </div>
);
