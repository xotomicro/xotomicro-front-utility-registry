import {EventModel} from "./EventModel"

export interface GlobalStoreModel {
    globalStore: EventModel
    handlerList: any
    on: any
    emit: any
}
