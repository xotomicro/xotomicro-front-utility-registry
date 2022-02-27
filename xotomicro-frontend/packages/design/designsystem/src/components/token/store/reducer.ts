import {generateRandomToken} from "./action";
import {initialState} from "./state";

export function tokenReducer(state: any = initialState, action: any) {
    switch (action.type) {
        case "generateRandomToken":
            return generateRandomToken(state);
        default:
            return state;
    }
}
