import Axios from "axios";

export default class AbstractApi {
    requestMethod = {
        GET: "GET",
        POST: "POST",
        PUT: "PUT",
        DELETE: "DELETE"
    }
    httpCall(requestURL, requestMethod, baseUrl) {
        let instance = null;
        if (baseUrl !== null) {
            instance = Axios.create({
                baseURL: baseUrl,
                method: requestMethod,
                url: requestURL
            });
        }
        return instance;
    }
}