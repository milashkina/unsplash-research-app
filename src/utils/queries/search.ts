import {ACCESS_KEY, ENDPOINT} from "../constant";
import {requestApi} from "./check-response";


export async function getSearch(query: string) {
  return await requestApi(`${ENDPOINT.RESEARCH}?client_id=${ACCESS_KEY}&query=${query}&page=1`)
}
