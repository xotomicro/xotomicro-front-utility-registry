import {ProductModel} from "./ProductModel"

export interface GlobalStoreModel {
    globalStore: ProductModel
    handlerList: any
    on: any
    emit: any
}
