import config from "config";

const AppUrl = `${config.domain}${config.apiUrl}`;

/**
 *
 * @param internalUrl
 * @param authToken
 * @param data
 * @returns {Promise<*>}
 */
export async function getApi(internalUrl, authToken, data) {
	const url = AppUrl + internalUrl;
	let dataFromResponse;

    let fetchBody = {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${authToken}`,
		}
	}
    if(data){
        fetchBody.body = JSON.stringify(data)
    }

	await fetch(url, fetchBody)
	.then((response) => response.json())
    .then((data) => (dataFromResponse = data))
	.catch((error) => {
		console.error("Error: ", error);
	});
	return dataFromResponse;
}

/**
 *
 * @param internalUrl
 * @param authToken
 * @param data
 * @param put
 * @returns {Promise<*>}
 */
export async function postApi(internalUrl, authToken, data, put = false) {
    const url = AppUrl + internalUrl;
    let dataFromResponse;

    await fetch(url, {
        method: put ? "PUT" : "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => (dataFromResponse = data))
    .catch((error) => {
        console.error("Error: ", error);
    });
    return dataFromResponse;
}