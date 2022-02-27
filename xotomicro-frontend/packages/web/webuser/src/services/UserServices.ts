import {globalEventDistributor} from "../App";

export function getToken(): string | null {
    return sessionStorage.getItem("token");
}

export function getUsername() {
    return globalEventDistributor.globalStore.username;
}
