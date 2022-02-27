import {OrderModel} from "./OrderModel";

export interface GlobalStoreModel {
    globalStore: OrderModel;
    handlerList: any;
    on: any;
    emit: any;
}
