class GlobalStoreClass {
    username: string
}

export class GlobalEventDistributor {
    globalStore: GlobalStoreClass = new GlobalStoreClass()

    handlerList: {event: string; callback: Function}[] = []

    on(event: string, callback: Function) {
        this.handlerList.push({event, callback})
    }

    emit(event: string) {
        this.handlerList.filter((handler: any) => handler.event === event).forEach((handler: any) => handler.callback())
    }
}
