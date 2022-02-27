import React from "react";
import {navigateToUrl} from "single-spa";
import {globalEventDistributor} from "../App";

/* FIX COMMENTED CODE TO WORK REACTIVELY */

export const NavBar: any = (): JSX.Element => (
    <nav>
        <h3 className="logo">Awesome micro front ends</h3>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" id="icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </label>
        <ul>
            <li style={{display: "inline"}}>
                <a href="/" onClick={navigateToUrl}>
                    Home
                </a>
            </li>
            &nbsp;|&nbsp;
            <li style={{display: "inline"}}>
                <a href="/webauth" onClick={navigateToUrl}>
                    webauth
                </a>
            </li>
            &nbsp;|&nbsp;
            <li style={{display: "inline"}}>
                <a href="/webevent" onClick={navigateToUrl}>
                    webevent
                </a>
            </li>
            &nbsp;|&nbsp;
            <li style={{display: "inline"}}>
                <a href="/weborder" onClick={navigateToUrl}>
                    weborder
                </a>
            </li>
            &nbsp;|&nbsp;
            <li style={{display: "inline"}}>
                <a href="/webproduct" onClick={navigateToUrl}>
                    webproduct
                </a>
            </li>
            &nbsp;|&nbsp;
            <li style={{display: "inline"}}>
                <a href="/webuser" onClick={navigateToUrl}>
                    webuser
                </a>
            </li>
            {/* {globalEventDistributor.globalStore.username ? (
                <div>
                    <li style={{display: "inline"}}>
                        <a href="/webevent" onClick={navigateToUrl}>
                            webevent
                        </a>
                    </li>
                    &nbsp;|&nbsp;
                    <li style={{display: "inline"}}>
                        <a href="/weborder" onClick={navigateToUrl}>
                            weborder
                        </a>
                    </li>
                    &nbsp;|&nbsp;
                    <li style={{display: "inline"}}>
                        <a href="/webproduct" onClick={navigateToUrl}>
                            webproduct
                        </a>
                    </li>
                    &nbsp;|&nbsp;
                    <li style={{display: "inline"}}>
                        <a href="/webuser" onClick={navigateToUrl}>
                            webuser
                        </a>
                    </li>
                </div>
            ) : (
                <div></div>
            )} */}
        </ul>
    </nav>
);
