import {GET_REQUEST, GET_REQUEST_SUCCESS, GET_REQUST_FAILED} from "../actions/app-action";
import {TResultData} from "../../types";
import {getSearch} from "../../utils/queries/search";


type TState = {
    total: number,
    total_pages: number,
    results: TResultData,
    appRequest: boolean,
    isSuccess: false
}

export const initialState: TState = {
    total: 0,
    total_pages: 0,
    results: [],
    appRequest: false,
    isSuccess: false
}

export function getRequest(query) {
    return function (dispatch) {
    dispatch({
        type: GET_REQUEST,
        appRequest: true
    })
        getSearch(query)
            .then((res) => {
                dispatch({
                    type: GET_REQUEST_SUCCESS,
                    results: res.results,
                    total: res.total,
                    total_pages: res.total_pages,
                    isSuccess: true
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_REQUST_FAILED,
                })
                console.log(err)
            })
    }
}

export const appReducer = (state: TState = initialState, action) => {
    switch (action.type) {
        case GET_REQUEST: {
            return {
                ...state,
                appRequest: true,
            };
        }
        case GET_REQUEST_SUCCESS: {
            return {
                ...state,
                results: action.results,
                appRequest: false,
                isSuccess: true,
            };
        }
        case GET_REQUST_FAILED: {
            return {
                ...state,
                appRequest: false,
                isSuccess: false,
            };
        }
        default: {
            return state;
        }
    }
}
