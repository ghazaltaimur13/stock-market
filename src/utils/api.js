import * as config from "config";

const apiUrl = (url, service, external=false) => {
    if (external) {
        return url
    }
    else if (!service || service === "") {
        return config.apiUrl + url;
    }
    return config.apiUrl + url;
};

const getHeaders = (token, type) => {
    // import token from localstorage/context
    let headers = {
        "Accept": "application/json",
        "Content-Type": type
    };
    if (token && token !== "") {
        headers["Authorization"] = "Bearer " + token;
    }
    return headers;
};

/**
 *
 * @param service
 * @param url
 * @param data
 * @param token
 * @param put
 * @returns {Promise<any>}
 */
export async function postData(service = "", url = "", data = {}, token = "", put = false, external=false, type="application/json") {

    url = apiUrl(url, service, external);
    return fetch(url, {
        method: put ? "PUT" : "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: getHeaders(token, type),
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
        .then(response => {
            return response.json();
        }); // parses JSON response into native Javascript objects
}

export async function getData(service = "", url = "", token = "") {

    url = apiUrl(url, service);
    let headers = getHeaders(token);
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: headers,
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
    })
        .then(response => response.json()); // parses JSON response into native Javascript objects
}