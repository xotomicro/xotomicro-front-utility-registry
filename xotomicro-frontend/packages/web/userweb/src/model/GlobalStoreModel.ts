import {UserModel} from "./UserModel";

export interface GlobalStoreModel {
    globalStore: UserModel;
    handlerList: any;
    on: any;
    emit: any;
}
