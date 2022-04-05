
const dataAccessToken = (parsedAccessToken) => {
    return {
        type: "dataAccessToken",
        payload: parsedAccessToken
    }
}

export {dataAccessToken};