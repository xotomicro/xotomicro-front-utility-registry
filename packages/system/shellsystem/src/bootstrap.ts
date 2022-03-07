/* eslint-disable import/no-unresolved */
// @ts-nocheck

import {start, registerApplication} from "single-spa"
import {GlobalEventDistributor} from "./events/globalEvents"

const globalEventDistributor: GlobalEventDistributor = new GlobalEventDistributor()

import("./style/overwrite.scss")

/**
 * Register applications here
 */

registerApplication(
    "hooksystem",
    () => import("hooksystem/ApplicationPage"),
    () => true,
    {globalEventDistributor}
)
registerApplication(
    "eventweb",
    () => import("eventweb/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/eventweb"),
    {globalEventDistributor}
)
registerApplication(
    "orderweb",
    () => import("orderweb/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/orderweb"),
    {globalEventDistributor}
)
registerApplication(
    "productweb",
    () => import("productweb/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/productweb"),
    {globalEventDistributor}
)
registerApplication(
    "userweb",
    () => import("userweb/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/userweb"),
    {globalEventDistributor}
)
registerApplication(
    "authweb",
    () => import("authweb/ApplicationPage"),
    (location: Location) => location.pathname.startsWith("/authweb"),
    {globalEventDistributor}
)

start()
