import * as ApiHandler from "./ApiRequestHandlers";

/**
 *
 * @param loginCredentials
 * @returns {Promise<null|*|boolean>}
 */
export async function getUserLogin(loginCredentials = {}) {
    try {
        if (!loginCredentials) {
            throw new Error("verify login credentials");
        }
        return await ApiHandler.postApi("/authenticate", null, loginCredentials);
    } catch (e) {
        return false;
    }
}
