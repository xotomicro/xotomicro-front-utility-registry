import {LoginModel} from "./LoginModel";

export interface GlobalStoreModel {
    globalStore: LoginModel;
    handlerList: any;
    on: any;
    emit: any;
}
