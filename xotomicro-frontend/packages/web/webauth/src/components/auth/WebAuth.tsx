import React from "react";
import {ApiLogin} from "../../api/ApiLogin";
import {getUsername, setToken} from "../../services/AuthServices";

export const WebAuth: any = (props: any): JSX.Element => <div className="section-app__item">{!getUsername() ? <ApiLogin setToken={setToken} /> : <p>{getUsername()}</p>}</div>;
