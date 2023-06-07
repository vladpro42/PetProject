export const PORT = 5554;

export const backendUrl = `http://localhost:${PORT}/api`;

export const loginUrl = backendUrl + "/login";
export const checkTokenUrl = backendUrl + "/checkToken/:";

export const login = async (url, body) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        credentials: "include",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    })
    return response
}