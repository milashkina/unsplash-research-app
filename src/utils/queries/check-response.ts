import {URL} from "../constant";


export const requestApi = async <T>(endpoint: Request | string, options?: object): Promise<T> => {
    const url = URL + endpoint;
    const res = await fetch(url, options);
    return checkResponse(res);
}
export const checkResponse = <T>(res: Response): Promise<T> => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}
