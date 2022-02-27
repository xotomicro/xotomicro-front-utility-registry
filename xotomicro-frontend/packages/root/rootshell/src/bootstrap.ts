// @ts-nocheck
/* eslint-disable prettier/prettier */

import {start, registerApplication} from "single-spa";
import {GlobalEventDistributor} from "./events/globalEvents";
const globalEventDistributor: GlobalEventDistributor = new GlobalEventDistributor();

import("./design/index.scss");

/**
 * Register applications here
 */

registerApplication(
    "designsystem",
    () => import("designsystem/App"),
    () => true,
    {globalEventDistributor}
);
registerApplication(
    "webevent",
    () => import("webevent/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/webevent"),
    {globalEventDistributor}
);
registerApplication(
    "weborder",
    () => import("weborder/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/weborder"),
    {globalEventDistributor}
);
registerApplication(
    "webproduct",
    () => import("webproduct/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/webproduct"),
    {globalEventDistributor}
);
registerApplication(
    "webuser",
    () => import("webuser/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/webuser"),
    {globalEventDistributor}
);
registerApplication(
    "webauth",
    () => import("webauth/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/webauth"),
    {globalEventDistributor}
);

start();
