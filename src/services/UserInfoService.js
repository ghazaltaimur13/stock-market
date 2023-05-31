import * as ApiHandler from "./ApiRequestHandlers";
/**
 *
 * @param authToken
 * @returns {Promise<*>}
 */
export const getUserDetails = async (userToken) => {
	const data = await ApiHandler.getApi("/details", userToken, null);
	return data;
}

/**
 *
 * @param authToken
 * @returns {Promise<*>}
 */
export const getUserPortfolio = async (userToken, currency, securityIds) => {
	let params = `?currencyCode=${currency}`
	if(securityIds)
		params += `&securityIds=${securityIds}`
	const data = await ApiHandler.getApi(`/portfolio/valuation${params}`, userToken, null);
	return data;
}

/**
 *
 * @param authToken
 * @returns {Promise<*>}
 */
export const getUserSecurity = async (userToken, securityIds, portfolioIds) => {
	const data = await ApiHandler.getApi(`/transactions/search?securityIds=${securityIds}&portfolioIds=${portfolioIds}`, userToken, null);
	return data;
}