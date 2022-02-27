import React, {useState} from "react";
import ApiAddProduct from "../../api/ApiAddProduct";
import ApiProduct from "../../api/ApiProduct";
import {getToken} from "../../services/ProductServices";

const token: string | null = getToken();

export const WebProduct: any = (props: any): JSX.Element => {
    const [update, setUpdate]: any = useState();
    return (
        <div className="section-app__item">
            <p>Add product</p>
            <ApiAddProduct token={token} update={update} setUpdate={setUpdate} />

            <p>Product list</p>
            <ApiProduct token={token} update={update} />
        </div>
    );
};
