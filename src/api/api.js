import { getData, postData } from "./util";

// getnews
export function getNews(json) {
    return getData("/news/get", json)
}