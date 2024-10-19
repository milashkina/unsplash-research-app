import {
    GET_REQUEST, GET_REQUEST_FAILED,
    GET_REQUEST_SUCCESS,
    GET_REQUEST_VALUE,
    INCREASE_PAGE, INITIAL_VALUE
} from "../actions/app-action";
import {TResultData} from "../../types";
import {getSearch} from "../../utils/queries/search";


type TState = {
    query: string,
    total: number,
    total_pages: number,
    results: TResultData,
    appRequest: boolean,
    isSuccess: false,
    isError: false,
    current_page: number,
}

export const initialState: TState = {
    query: '',
    total: 0,
    total_pages: 0,
    results: [],
    appRequest: false,
    isSuccess: false,
    isError: false,
    current_page: 1,
}

export function getRequest(query, page) {
    return function (dispatch) {
    dispatch({
        type: GET_REQUEST,
        appRequest: true,
    })
    getSearch(query, page)
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
                type: GET_REQUEST_FAILED,
            })
            console.log(err)
        })
    }
}

export const appReducer = (state: TState = initialState, action) => {
    switch (action.type) {
        case INITIAL_VALUE: {
            return {
                ...state,
                query: '',
                total: 0,
                total_pages: 0,
                results: [],
                appRequest: false,
                isSuccess: false,
                current_page: 1,
            }
        }
        case INCREASE_PAGE: {
            return {
                ...state,
                current_page: ++state.current_page
            }
        }
        case GET_REQUEST_VALUE: {
            return {
                ...state,
                query: action.value
            }
        }
        case GET_REQUEST: {
            return {
                ...state,
                appRequest: true,
            };
        }
        case GET_REQUEST_SUCCESS: {
            return {
                ...state,
                results:  [...state.results].concat(action.results),
                appRequest: false,
                isSuccess: true,
            };
        }
        case GET_REQUEST_FAILED: {
            return {
                ...state,
                appRequest: false,
                isSuccess: false,
                isError: true,
            };
        }
        default: {
            return state;
        }
    }
}
