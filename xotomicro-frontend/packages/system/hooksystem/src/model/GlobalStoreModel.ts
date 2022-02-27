import {NavModel} from "./NavModel";

export interface GlobalStoreModel {
    globalStore: NavModel;
    handlerList: any;
    on: any;
    emit: any;
}
