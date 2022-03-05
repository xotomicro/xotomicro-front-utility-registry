import React from "react"
import {LoginApi} from "../../api/LoginApi"
import {getUsername, setToken} from "../../services/AuthServices"

export const AuthWeb: any = (props: any): JSX.Element => <div className="section-app__item">{!getUsername() ? <LoginApi setToken={setToken} /> : <p>{getUsername()}</p>}</div>
