import axios from "axios";

axios.defaults.baseURL = "//8.129.3.87:9999/";
axios.defaults.headers.common["Content-Type"] = "application/json;charset=utf8";

// 请求拦截器
axios.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);

axios.interceptors.response.use(
    data => {
        return data;
    },
    error => Promise.resolve(error.response)
);

export function formateURLOnlyGet(link, json = {}) {
    let url = link;
    var data = Object.entries(json);

    if (data.length) {
        url += url.indexOf("?") == -1 ? "?" : "";
        url += Object.entries(data)
            .map(item => {
                return item[1].join("=");
            })
            .join("&");
    }

    return url;
}
/**
 * GET请求方法
 * @param {String} url 请求地址
 * @param {json} json 请求参数
 */
export function getData(url, json = {}) {
    return axios
        .get(formateURLOnlyGet(url, json))
        .then(res => res.data)
        .catch(error => error.response);
}

export function postData(url, data = {}) {
    return axios({
            method: "POST",
            url,
            data
        })
        .then(res => res.data)
        .catch(error => error.response);
}
export function deleteData(url, json = {}) {
    return axios({
            url: formateURLOnlyGet(url, json),
            method: "delete"
                // data: json
        })
        .then(res => res.data)
        .catch(error => error.response);
}
export function deleteJSON(url, json = {}) {
    return axios({
            url: url,
            method: "delete",
            data: json
        })
        .then(res => res.data)
        .catch(error => error.response);
}

export function putData(url, json = {}) {
    return axios({
            url,
            method: "put",
            data: json
        })
        .then(res => res.data)
        .catch(error => error.response);
}