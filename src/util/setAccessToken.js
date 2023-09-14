/**
 * This function is used to set the access token and refresh token in the local storage
 */

import req from "./req";

export default function setAccessToken() {

    req({ uri: 'get-access-token', method: 'POST' }).then(data => {
        console.log(data)
    })

}