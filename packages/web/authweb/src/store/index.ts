import {tokenReducer} from "../components/token/store/reducer"
import {globalEventDistributor} from "../App"
import {Store, createStore, combineReducers} from "redux"

const store: Store<any, any> = createStore(
    combineReducers({
        token: tokenReducer,
    })
)

export const getGlobalStore: Function = () => globalEventDistributor.globalStore

export default store
