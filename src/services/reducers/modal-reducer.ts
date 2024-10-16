import {CLOSE_DETAILS_MODAL, OPEN_DETAILS_MODAL, SELECT_RESULT, UNSELECT_RESULT} from "../actions/app-action";

type TModalState = {
    isOpen: boolean,
    element: {}
}

export const initialState: TModalState = {
    isOpen: false,
    element: {}
}

export function selectResult(element) {
    return {
        type: SELECT_RESULT,
        element: element
    }
}

export const modalReducer = (state: TModalState = initialState, action) => {
    switch(action.type) {
        case SELECT_RESULT: {
            return {
                ...state,
                isOpen: false,
                element: action.element
            };
        }
        case UNSELECT_RESULT: {
            return {
                ...state,
                isOpen: false,
                element: {}
            };
        }
        case OPEN_DETAILS_MODAL: {
            return {
                ...state,
                isOpen: true,
            };
        }
        case CLOSE_DETAILS_MODAL: {
            return {
                ...state,
                isOpen: false,
                element: {}
            };
        }
        default: {
            return state;
        }
    }
}
